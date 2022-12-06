import axios from "axios";
import { environment } from "../environments/environment"

export const getAllUsers = () => new Promise((resolve, reject) => {
    axios.get(environment.APIHost+'/users/')
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const getUserByNickname = (nickname) => new Promise((resolve, reject) => {
    axios.get(environment.APIHost+'/users/'+nickname)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const createUser = (newData) => new Promise((resolve, reject) => {
    axios.post(environment.APIHost+'/users/', newData)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const editUser = (id, editedData) => new Promise((resolve, reject) => {
    axios.put(environment.APIHost+'/users/'+id, editedData)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const removeUser = (id) => new Promise((resolve, reject) => {
    axios.delete(environment.APIHost+'/users/'+id)
    .then(res => resolve(res))
    .catch(err => reject(err))
})