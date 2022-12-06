import axios from "axios";
import { environment } from "../environments/environment"

export const getAll = () => new Promise((resolve, reject) => {
    axios.get(environment.APIHost+'list')
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const getABy = (id) => new Promise((resolve, reject) => {
    axios.get(environment.APIHost+id)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const create = (newData) => new Promise((resolve, reject) => {
    axios.post(environment.APIHost, newData)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const edit = (id, editedData) => new Promise((resolve, reject) => {
    axios.put(environment.APIHost+id, editedData)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const remove = (id) => new Promise((resolve, reject) => {
    axios.delete(environment.APIHost+id)
    .then(res => resolve(res))
    .catch(err => reject(err))
})