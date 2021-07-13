import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

import styles from './styles';

import getPosts from '../../repository/postsRepository';

import getRealm from '../../services/realm';

import Icon from 'react-native-vector-icons/Ionicons';

const Posts = () => {
    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(false)

    const carregaPosts = async () => {
        setLoading(true);
        const posts = await getPosts();
        setPostList(posts);
        setLoading(false);
    };

    const savePost = async (post) => {
        const realm = await getRealm();
        try{
            realm.write(() => {
                realm.create('Post', {
                    id: post.id,
                    userId: post.userId,        
                    title: post.title,
                    body: post.body,
                });
                console.log("Post armazenado com Sucesso!");
            })
        } catch (err) {
            console.log(err);
        }
    };

    const deleteRealm = async () => {
        const realm = await getRealm();

        realm.write(() => {
            const realmPosts = realm.objects("Post");
            realm.delete(realmPosts);
        })
        console.log("Demitido com sucesso!")
    }

    const getPostsRealm = async () => {
        const realm = await getRealm();
        const realmPosts = realm.objects("Post");
        const filter = realmPosts.filtered('id = 2')
        console.log(filter);
    };

    const renderFooter = () => {
        if (!loading) return null
        return <ActivityIndicator size="large" color="#20C0DF" />
    }

    useEffect(() => {
        carregaPosts();
        getPostsRealm();
        deleteRealm();
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
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', width: '80%'}}>
                        {item.title.toUpperCase()}
                    </Text>
                    <TouchableOpacity onPress={() => savePost(item)}>
                        <Icon name="save" size={32} />
                    </TouchableOpacity>
                </View>

            )}
        />
    )
}

export default Posts;