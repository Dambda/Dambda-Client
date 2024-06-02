import instance from "./instance/instance"

export const getComment = async({id}) => {
    const response = await instance.get(`/diaries/${id}`, {
        headers : {
            'Content-Type': 'application/json'
        }
    });
    
    return response.data;
}

export const getDiaryToDate = async ({year, month, date}) => {
    const response = await instance.get(`/diaries/daily/${year}/${month}/${date}`, {
        headers : {
            'Content-Type' : 'application/json'
        }
    })

    return response.data;
}


export const getDiaryToMonth = async({year, month}) => {
    const response = await instance.get(`/diaries/monthly/${year}/${month}`, {
        headers : {
            'Content-Type' : 'application/json'
        }
    })

    return response;
}


export const getDiaryComment = async({id}) => {
    const response = await instance.get(`/diaries/${id}/comments`, {
        headers : {
            'Content-Type' : 'application/json'
        }
    })

    return response;
}

export const postDiaryComment = async({id, content}) => {
    const request = await instance.post(`/diaries/${id}/comments`, {
        content : content
    })

    return request;
}