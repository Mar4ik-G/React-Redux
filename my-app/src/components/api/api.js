import axios from "axios";


const instance = axios.create({
    withCredentials:true,
    headers: {
        "API-KEY": "edf44cad-8c0e-4351-9594-484692820c42"
    },
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => {
            return response.data
        })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`,)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`,)
    },
    getProfile(userId){
        console.warn("Obsolve method. Please profileAPI object")
        return  profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile(userId){
        return  instance.get(`profile/`+ userId)
    },
    getStatus(userId){
       return instance.get('profile/status/' + userId)
    },
    updateStatus(status){
        return instance.put('profile/status/', {status:status})
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`, {withCredentials:true})
    },

}

