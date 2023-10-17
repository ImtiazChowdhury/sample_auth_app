import React, { useCallback, useRef } from 'react'
import { ScrollView, Text, View } from 'react-native'
import IoIcons from 'react-native-vector-icons/Ionicons'
import CustomTextInput from '../../component/form/TextInput'
import useForm from '../../hooks/helper/useForm'
import styles from "./LoginCss"
import SubmitButton from '../../component/form/SubmitButton'
import { loginApi } from '../../api/login'
import Spinner from '../../component/spinner/Spinner'
import loginValidator from '../../validator/loginValidator'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/authSlice'

function LoginScreen() {
    const dispatch = useDispatch();
    const { handleChange, formData, loading, setLoading, errors, setErrors } = useForm()

    const handleSubmit = useCallback(async () => {
        setErrors({});
        const payload = {
            username: formData.username,
            password: formData.password
        }

        setLoading(true)

        const validationErrors = await loginValidator(payload);
        if (validationErrors) {
            setErrors(validationErrors)
            setLoading(false)
            return;
        }
        try {
            const loginResponse = await loginApi(payload);
            dispatch(loginUser(loginResponse))
            setLoading(false)
        } catch (err) {
            setLoading(false)
        }

    }, [formData])

    const usernameRef = useRef()
    const passwordRef = useRef()

    return (
        <ScrollView contentContainerStyle={styles.wrapper}>
            {loading && <Spinner />}
            <View style={styles.container} >

                {/* greeting */}
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <IoIcons name='person-outline' style={styles.avatarIcon} />
                    </View>
                </View>
                <View style={styles.loginTextContainer}>
                    <Text style={styles.loginText}>Login to your account</Text>
                </View>

                {/* form start */}
                <CustomTextInput
                    label="Email or Phone"
                    onChangeText={(v) => handleChange("username", v)}
                    value={formData.username}
                    error={errors.username}
                    innerRef={usernameRef}
                    onSubmitEditing={() => passwordRef.current?.focus()}
                    returnKeyType="next"
                />
                <CustomTextInput
                    label="Password"
                    onChangeText={(v) => handleChange("password", v)}
                    value={formData.password}
                    secureTextEntry
                    error={errors.password}
                    innerRef={passwordRef}
                    returnKeyType="done"
                    onSubmitEditing={handleSubmit}
                />
                <SubmitButton
                    onPress={handleSubmit}
                    text={loading ? "Loading ..." : "Login"}
                    disabled={loading}
                />

            </View>
        </ScrollView>
    )
}

export default LoginScreen