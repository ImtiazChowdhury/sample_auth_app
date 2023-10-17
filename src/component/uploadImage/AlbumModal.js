import React from 'react'
import { FlatList, Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from "./AlbumModalCss"
import Icon from "react-native-vector-icons/Ionicons"
function AlbumModal({ albumList, onSelect, onClose, selectedAlbum }) {

    function handleAlbumPress(album) {
        onSelect(album)
        onClose()
    }
    return (
        <Modal transparent onRequestClose={onClose} visible={true}>
            <View style={styles.container}>

                <FlatList
                    keyExtractor={((item, index) => "album" + index)}
                    data={[...albumList].sort((a, b) => b.assetCount - a.assetCount).filter(i => i.photoCount > 0)}
                    renderItem={({ item: album }) => (
                        <TouchableOpacity style={styles.albumItem} onPress={() => handleAlbumPress(album)}>
                            <View style={styles.albumInfo}>
                                <Text style={styles.albumItemName}>{album.title}</Text>
                                <Text style={styles.albumItemCount}>{album.photoCount} Items</Text>
                            </View>
                            <View style={styles.albumCoverPhoto}>
                                <Image source={{ uri: album?.coverPhoto?.uri }} style={styles.albumCover} />
                            </View>
                        </TouchableOpacity>
                    )}

                    ListHeaderComponent={
                        <View style={styles.header}>
                            <View style={styles.albumName}>
                                <Text style={styles.albumNameText}>{selectedAlbum?.title}</Text>
                                <Icon name="chevron-up-outline" style={styles.albumArrow} />
                            </View>

                            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                                <Icon name="close-circle-sharp" style={styles.closeIcon} />
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>

        </Modal>
    )
}

export default AlbumModal