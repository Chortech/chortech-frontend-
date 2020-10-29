import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/ProfileStyles';

import * as Animatable from 'react-native-animatable';


const ProfileScreen = ({ navigation }) => {

    const [data, setData] = useState({
        name: "بابک سفیدگر",
        username: "babak-ssh",
        email: "sample@example.com",
        phone: "09123456789",
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.profileImage} source={require('../assets/images/profile_picture_white.png')}/>
                <Text style={styles.userNameText}>{data.name}</Text>
            </View>
            <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
                <View style={styles.textWrapper}>
                    <View style={styles.textContainerLeft}>
                        <Text style={styles.textInfo}>{data.username}</Text>
                    </View>
                    <View style={styles.textContainerRight}>
                        <Text style={styles.textInfo}>نام کاربری</Text>
                    </View>
                </View>
                <View style={styles.textWrapper}>
                    <View style={styles.textContainerLeft}>
                        <Text style={styles.textInfo}>{data.email}</Text>
                    </View>
                    <View style={styles.textContainerRight}>
                        <Text style={styles.textInfo}>ایمیل</Text>
                    </View>
                </View>
                <View style={styles.textWrapper}>
                    <View style={styles.textContainerLeft}>
                        <Text style={styles.textInfo}>{data.phone}</Text>
                    </View>
                    <View style={styles.textContainerRight}>
                        <Text style={styles.textInfo}>تلفن همراه</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>دوستان</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={ () => { navigation.navigate('EditProfile') }}>
                        <Text style={styles.buttonText}>ویرایش اطلاعات</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default ProfileScreen;