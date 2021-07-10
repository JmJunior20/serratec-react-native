import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import styles from './styles';

import getPosts from '../../repository/postsRepository';

const Posts = () => {
    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(false)

    const carregaPosts = async () => {
        setLoading(true)
        const posts = await getPosts()
        setPostList(posts)
        setLoading(false)
    }

    const renderFooter = () => {
        if (!loading) return null
        return <ActivityIndicator size="large" color="#20C0DF" />
    }

    useEffect(() => {
        carregaPosts()
    }, [])

    return (
        <FlatList
            style={styles.container}
            data={postList}
            keyExtractor={item => item.id}
            ListFooterComponent={renderFooter}
            renderItem={({ item }) => (
                <View
                    style={{
                        backgroundColor: 'lightgreen',
                        margin: 5,
                        padding: 20,
                        borderRadius: 12,
                    }}>
                    <Text style={{ fontSize: 18, textAlign: 'center' }}>
                        {item.title.toUpperCase()}
                    </Text>
                </View>

            )}
        />
    )
}

export default Posts;