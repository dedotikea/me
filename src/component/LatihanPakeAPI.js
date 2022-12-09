import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts"
const CMS_BASE_URL = "http://103.31.39.215"
const tokenOsu = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxODU2NCIsImp0aSI6IjJjZmVjNzMzNDQzZGUzMjkzNWE5YzUwYTYyNmVlNmM5YWM1ZGM5MzVmYmNmZDI3OTk5ZGJmZWQyNDVhMDhiMGExYjk4MzNiODYyOGQwOWMxIiwiaWF0IjoxNjY3NTQ2NzAxLjM0MjM2NywibmJmIjoxNjY3NTQ2NzAxLjM0MjM2OSwiZXhwIjoxNjY3NjMzMDMyLjU3Nzk0Nywic3ViIjoiIiwic2NvcGVzIjpbInB1YmxpYyJdfQ.lEm0kq4TZpXKaBK95uI948Qfu1jKdzZOiaUsRn6Jdq7ZonJycByQCik7swZW7WggTu-YHseW24rct6a6ZZ7lHo6Q1dSE8vAI8DrIVWERnz8gQalpzgRhG8q1EciOYX4YlkU19dZpIV14ZjCRrfsGkAsXFO4iOoTzDVEfEB4vBVUKd9_8bRKbE50CRPN62iZdqqUvDuiQMRTv6EXKXolHHlazbOw9gsEp0Oytwm7bUCM_kFq1lwx7qdM68ijeBtJIK8h1RppSFti_16MFbxbBeG_vL3SHURsVWnqlc2fBzgJerrHemt3HrfmSgY26On44IkQM-_BJXuEtfeUWDmb9uNlpP3cBUAeG2AJXTkTTQM5guQdDvEdsFTU9jTmg8kxidV_otuaPHKFWuA2qUgQ9fkIEWO0nfkz3Cnuk1QG-QYyKWvzjNrAiW0WbZ4qewtw4hwyWZM6Qo6STW_bzN3sTg20UkzvruwywfyqtnRqA9lrwyRkrl7V9thyc0W58nwHWA3q1nh0fzug6N6UbBDD69teJ7WLQl9BSDXjrHo01uHxWDPqMLZdSN7qaKC9Rvgg3sOa7TA4WZJ0QwkBTJ8Js3FDhF_C_KOa-z2xd7JRmwGHrGx5R2rQlqsBPzggGSqqUUzGH8gAzE2MbbPo-pp_kyPHEnHKOosRHnBhi6R8A5y8"

const LatihanPakeAPI = () => {

    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)
    const [cat, setCat] = useState("")
    const [animal, setAnimal] = useState("")
    const [anime, setAnime] = useState("")
    const [mapOsu, setMapOsu] = useState("")
    const [lastPost, setLastPost] = useState(null)
    const [sendStrg, setSendStrg] = useState(null)


    useEffect(() => {
        //nyoba get pake async
        async function getPost() {
            const response = await axios.get(`${baseURL}/1`)
            setPost(response.data)
        }
        getPost()
    }, [])

    //work kalo udah mencet button di web heokuappnya
    function testOsu() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://osu.ppy.sh/api/v2/beatmaps/lookup?id=3630406`,
            {
                headers: {
                    Authorization: `Bearer ${tokenOsu}`
                },
            }).then((response) => {
                setMapOsu(response.data)
                let temp = mapOsu.beatmapset.covers
                setMapOsu(temp)
            }).catch((error) => {
                console.log(error.message)
            })
    }

    function createPost() {
        //nyoba post
        axios.post(baseURL, {
            title: "hello world",
            body: "test post"
        }).then((response) => {
            setPost(response.data)
        })
    }

    function updatePost() {
        //nyoba put
        axios.put(`${baseURL}/1`, {
            title: "hello",
            body: "test update"
        }).then((response) => {
            setPost(response.data)
        })
    }

    function deletePost() {
        //nyoba delete
        axios.delete(`${baseURL}/1`).then(() => {
            alert("post deleted")
            setPost(null)
        })
    }

    function testErrorHandle() {
        //nyoba kalo error
        axios.get(`${baseURL}/asdf`).then((response) => {
            setPost(response.data)
            console.log(response.data)
        }).catch(error => {
            setError(error)
        })
    }

    function getRandomCat() {
        axios.get(`https://api.thecatapi.com/v1/images/search`).then((response) => {
            let [temp] = response.data
            setCat(temp)
        })
    }

    function getRandomAnimal() {
        axios.get(`https://zoo-animal-api.herokuapp.com/animals/rand`).then((response) => {
            setAnimal(response.data)
        })
    }

    function getRandomAnimeBonk() {
        axios.get(`https://api.waifu.pics/sfw/bonk`).then((response) => {
            setAnime(response.data)
        })
    }

    const Render = () => {
        if (lastPost == null) {
            return(
                <p>
                    data masih kosong
                </p>
            )
        }
        return (
            <p>
                <ul>
                    LastPost
                    <li>
                        Strg:
                        <ul>
                            <li>latitude: {lastPost.STRG.latSTRG}</li>
                            <li>longitude: {lastPost.STRG.longSTRG}</li>
                        </ul>
                    </li>
                    <li>
                        WTM:
                        <ul>
                            <li>latitude: {lastPost.WTM.latWTM}</li>
                            <li>longitude: {lastPost.WTM.longWTM}</li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    setSendStrg
                    <li>Success: {sendStrg.success.toString()}</li>
                </ul>
            </p>
        )
    }

    function testApiCms() {
        axios.all([
            axios.get(`https://cors-anywhere.herokuapp.com/${CMS_BASE_URL}/api/cms/v1/last-pos/1`),
            axios.get(`https://cors-anywhere.herokuapp.com/${CMS_BASE_URL}/api/cms/v1/send-strg/1`),
        ]).then(
            axios.spread((lastPost, sendStrg) => {
                setLastPost(lastPost.data)
                setSendStrg(sendStrg.data)
            })
        )
        console.log('Last Position:', lastPost, 'Send Storage:', sendStrg)
    }

    if (!post) {
        return "No post"
    }
    if (error) {
        return `Error: ${error.message}`
    }

    return (
        <div style={{marginTop: "100px"}}>
            <button onClick={createPost}>test createpost</button>
            <button onClick={updatePost}>test updatepost</button>
            <button onClick={deletePost}>test deletepost</button>
            <button onClick={testErrorHandle}>test error</button>
            <button onClick={getRandomCat}>test cat</button>
            <button onClick={getRandomAnimal}>test animal</button>
            <button onClick={getRandomAnimeBonk}>test anime</button>
            <button onClick={testOsu}>test osu</button>
            <button onClick={testApiCms}>test api cms</button>
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <p>
                    <img src={cat.url} alt="test cat" width="200px"></img>
                </p>
                <p>
                    <img src={animal.image_link} alt="test animal" width="200px"></img>
                </p>
                <p>
                    <img src={anime.url} alt="test anime" width="200px"></img>
                </p>
                <p>
                    <img src={mapOsu.card} alt="test bg osu"></img>
                </p>
                <Render></Render>
                <div>
                    buat footer
                </div>
            </div>
        </div>
    )
}

export default LatihanPakeAPI