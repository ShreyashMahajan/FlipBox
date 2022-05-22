import axios from 'axios';

async function fetchDataFromApi({ url, method, body, propertyName }) {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
        const { data, status } = await axios({
            method,
            url,
            data: body,
            headers: { authorization: user !== null ? user.encodedToken : '' },
        });

        if (status === 200 || status === 201) {
            return {
                data: data,
                success: true,
                message: `${propertyName} fetched successfully`,
            }
        }

        throw Error('api request failed');
    }
    catch (error) {
        console.error(error);
        return {
            data: null,
            success: false,
            message: `${propertyName} failed to fetch`
        }

    }


}

export default fetchDataFromApi;