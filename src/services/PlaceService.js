import axios from "axios";
import { environment } from "../environments/environment"

export const getAllPlaces = () => new Promise((resolve, reject) => {
    axios.get(environment.APIHost+'/places/')
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const getPlaceById = (id) => new Promise((resolve, reject) => {
    axios.get(environment.APIHost+'/places/'+id)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const createPlace = (newData) => new Promise((resolve, reject) => {
    axios.post(environment.APIHost+'/places/', newData)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const editPlace = (id, editedData) => new Promise((resolve, reject) => {
    axios.put(environment.APIHost+'/places/'+id, editedData)
    .then(res => resolve(res))
    .catch(err => reject(err))
})

export const removePlace = (id) => new Promise((resolve, reject) => {
    axios.delete(environment.APIHost+'/places/'+id)
    .then(res => resolve(res))
    .catch(err => reject(err))
})