import api from '../services/api';

const getPosts = async () => {
    try {
        //Executar ação
        const postList = await api.get('posts', {responseType: 'text'})
        if(postList.status !== 200) throw new Error("DEU RUIM")
        return postList.data
    } catch (error) {
        console.log(error)
    }
}

export default getPosts;