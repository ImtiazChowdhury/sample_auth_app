import React, { useCallback, useEffect, useState } from 'react'
import { Alert, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import styles from "./UploadImageCss"
import * as MediaLibrary from 'expo-media-library'
import Spinner from '../../component/spinner/Spinner'
import Icon from "react-native-vector-icons/Ionicons"
import AlbumModal from '../../component/uploadImage/AlbumModal'
import { addImage } from '../../store/authSlice'
import UploadImageCard from '../../component/uploadImage/UploadImageCard'


function UploadImage({ navigation, route }) {
    const dispatch = useDispatch()

    // library permission
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

    useEffect(() => {
        if (permissionResponse && !permissionResponse.granted && permissionResponse.canAskAgain) {
            requestPermission()
        }
        if (permissionResponse && !permissionResponse.granted && !permissionResponse.canAskAgain) {
            Alert.alert("Permission Denied", "Media Library Permission was denied");
        }
    }, [permissionResponse])



    //album list
    const [albumList, setAlbumList] = useState([]);

    async function getAlbumList() {
        const response = await MediaLibrary.getAlbumsAsync()
        if (!response) return;

        const allPhotoAlbum = {
            title: "All Photos",
            photoCount: 0,
            id: undefined
        }

        // calculating number of photos as assetCount includes video count also
        // as we only support photos, showing asset count won't be ideal
        // not the best approach, but expo media library doesn't provide a better way
        // as a side benefit, we will get the cover photo for each album
        for (let album of response) {
            const assetList = await MediaLibrary.getAssetsAsync({ album: album.id, mediaType: MediaLibrary.MediaType.photo })
            album.photoCount = assetList?.totalCount || 0;
            album.coverPhoto = assetList?.assets && assetList?.assets[0]

            allPhotoAlbum.photoCount += album.photoCount;
            if (!allPhotoAlbum.coverPhoto) allPhotoAlbum.coverPhoto = album.coverPhoto;
        }
        setAlbumList([allPhotoAlbum, ...response]);
    }

    useEffect(() => {
        if (permissionResponse?.granted) {
            getAlbumList()
        }
    }, [permissionResponse])



    //album select
    const [albumModalOpen, setAlbumModalOpen] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(null)
    useEffect(() => {
        if (albumList?.length) {
            let albumWithMostAsset;
            for (let album of albumList) {
                if (!albumWithMostAsset || (album.assetCount > albumWithMostAsset.assetCount)) {
                    albumWithMostAsset = album;
                }
            }
            setSelectedAlbum(albumWithMostAsset)
        }
    }, [albumList])



    //single album asset list
    const [assetList, setAssetList] = useState([]);
    const [assetResponse, setAssetResponse] = useState(null);
    const [loadingAsset, setLoadingAsset] = useState(true);
    const [loadingMoreAsset, setLoadingMoreAsset] = useState(false);
    async function getSingleAlbumAssets(albumId) {
        setLoadingAsset(true);
        const response = await MediaLibrary.getAssetsAsync({
            album: albumId,
            mediaType: MediaLibrary.MediaType.photo,
            first: 21
        })
        setAssetList(response?.assets)
        setAssetResponse(response)
        setLoadingAsset(false)
    }

    const loadMoreAsset = useCallback(async function (albumId) {

        if (assetResponse?.hasNextPage && !loadingMoreAsset) {
            setLoadingMoreAsset(true);

            const response = await MediaLibrary.getAssetsAsync({
                album: albumId,
                mediaType: MediaLibrary.MediaType.photo,
                first: 21,
                after: assetResponse.endCursor,
            })
            setAssetList(p => [...p, ...response?.assets])
            setAssetResponse(response)
            setLoadingMoreAsset(false)
        }

    }, [assetList, loadingMoreAsset, assetResponse])

    useEffect(() => {
        if (selectedAlbum) {
            getSingleAlbumAssets(selectedAlbum.id)
        }
    }, [selectedAlbum])


    //asset selection
    const [selectedAssets, setSelectedAssets] = useState([])
    const toggleSelection = useCallback((assetUri) => {
        setSelectedAssets(p => {
            const temp = [...p];
            const currentIndex = temp.indexOf(assetUri);
            if (currentIndex > -1) {
                temp.splice(currentIndex, 1)
            } else {
                temp.push(assetUri)
            }
            return temp;
        })
    }, [selectedAssets])

    //reset asset selection on album change
    useEffect(() => {
        setSelectedAssets([])
    }, [selectedAlbum])


    const handleUpload = useCallback(() => {
        dispatch(addImage(selectedAssets))
        navigation.navigate("Profile")
    }, [selectedAssets])

    return (
        <>
            <View style={styles.wrapper}>

                <View style={styles.container}>

                    {loadingAsset && <Spinner />}
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={assetList}
                        contentContainerStyle={styles.assetGrid}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <UploadImageCard
                                asset={item}
                                toggleSelection={toggleSelection}
                                selectedAssets={selectedAssets}
                            />
                        )}
                        ListHeaderComponent={
                            <View style={styles.header}>

                                <TouchableOpacity style={styles.albumName} onPress={() => setAlbumModalOpen(true)}>
                                    <Text style={styles.albumNameText}>{selectedAlbum?.title}</Text>
                                    <Icon name="chevron-down-outline" style={styles.albumArrow} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[
                                        styles.nextButton,
                                        selectedAssets?.length ? styles.nextButtonActive : styles.nextButtonDisabled
                                    ]}
                                    disabled={!selectedAssets.length}
                                    onPress={handleUpload}
                                >
                                    <Text style={styles.nextButtonText}>
                                        Upload {!!selectedAssets?.length && `(${selectedAssets.length})`}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        }
                        onEndReached={() => loadMoreAsset(selectedAlbum?.id)}
                        onEndReachedThreshold={0.2}
                        ListEmptyComponent={
                            <View style={styles.emptyList}>
                                <Text style={styles.emptyListText}>Loading images ...</Text>
                            </View>
                        }
                        ListFooterComponent={
                            loadingMoreAsset ?
                                <Text style={styles.emptyListText}>Loading more ...</Text>
                                : <></>
                        }
                    />

                </View>
            </View>



            {albumModalOpen &&
                <AlbumModal
                    albumList={albumList}
                    onClose={() => setAlbumModalOpen(false)}
                    selectedAlbum={selectedAlbum}
                    onSelect={(album) => setSelectedAlbum(album)}
                />
            }

        </>

    )
}

export default UploadImage