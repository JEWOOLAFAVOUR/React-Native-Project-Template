import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

const FormInput = ({ placeholder, keyboardType, eyeoff, value, setValue, }) => {
    const [hide, setHide] = useState(false);
    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    placeholder={placeholder}
                    style={{ ...FONTS.body3, color: "#040B1B", flex: 1 }}
                    keyboardType={keyboardType}
                    value={value}
                    // defaultValue='ssssjj'
                    onChangeText={setValue}
                />
                {eyeoff &&
                    <TouchableOpacity onPress={() => setHide(!hide)}>
                        <Image source={hide ? icons.padlock : icons.padlock} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    container: {
        height: SIZES.h1 * 1.7,
        // borderWidth: 0.8,
        backgroundColor: COLORS.offwhite,
        borderRadius: SIZES.base * 0.8,
        marginTop: SIZES.base * 0.7,
        paddingLeft: SIZES.h3,
        paddingRight: SIZES.base * 1.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SIZES.h5,
        borderColor: "#F3F7FF",
    },
})