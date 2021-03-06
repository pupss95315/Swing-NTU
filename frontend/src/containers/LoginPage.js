import { Button,Form, Card, Container, Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import '../App.css';
import { useMutation, useLazyQuery } from '@apollo/client';
// import SendMail from '../components/SendMail.js'
import {
    UPDATE_USER_MUTATION,
    USER_QUERY
} from '../graphql';

const LoginPage = () => {
    const [queryUser, { loading, error, data }] = useLazyQuery(USER_QUERY, {
        fetchPolicy: "no-cache"
      })
    const [updateUser] = useMutation(UPDATE_USER_MUTATION);
    
    const [UID, setUID] = useState("");
    const [password, setPassword] = useState("");
    const [regisUID, setRegisUID] = useState("");
    const [studentID, setStudentID] = useState("");
    const [regisPassword, setRegisPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [page, setPage] = useState("login");
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false)
    // const history = useHistory();


    
    const handleAfterQuery = async () => {
        if(page === "login"){
            if(! data.users[0]){
                setMsg("序號不存在")
                setShow(true)
            }
            else if(data.users[0].password === null){
                setMsg("序號未註冊")
                setShow(true)
            }
            else if(password !== data.users[0].password){
                setMsg("密碼錯誤")
                setShow(true)
            }
            else if(password === data.users[0].password){
                setValidated(true)
                window.localStorage.setItem("id", UID)
                window.localStorage.setItem("group", data.users[0].group)
                window.localStorage.setItem("isLogin", true)
                setLoggedIn(true)
            }
        }
        else{
            // alert(true)
            // console.log(data.users[0])
            if(! data.users[0]){
                setMsg("序號不存在")
                setShow(true)
            } else if(data.users[0].password !== null){
                console.log(true)
                setMsg("序號已註冊")
                setShow(true)
            }
            else{
                const msg = await updateUser({ variables: { UID: regisUID, data: { password: regisPassword, student_id: studentID }}})
                console.log(msg.data.updateUser)
                // const verify = await SendMail(studentID);
                // console.log(verify)
                if (msg.data.updateUser === "success") {
                    console.log(true)
                    setMsg("註冊成功")
                    setShow(true)
                    setPage("login")
                }
            }
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        //console.log(UID)
        if(e.currentTarget.checkValidity()){
            await queryUser({ variables: { UID: UID }})
            // console.log(data)
            // if(data){
            //     if(! data.users[0]){
            //         setMsg("序號不存在")
            //         setShow(true)
            //     }
            //     else if(data.users[0].password === null){
            //         setMsg("序號未註冊")
            //         setShow(true)
            //     }
            //     else if(password !== data.users[0].password){
            //         setMsg("密碼錯誤")
            //         setShow(true)
            //     }
            //     else if(password === data.users[0].password){
            //         console.log(true)
            //         setValidated(true)
            //         window.localStorage.setItem("id", UID)
            //         window.localStorage.setItem("group", data.users[0].group)
            //         window.localStorage.setItem("isLogin", true)
            //         setLoggedIn(true)
            //         //history.push("/mainPage/${UID}")
            //     }
            // }
        }
        else{
            if(UID.length === 0 && password.length === 0){
                setMsg("交換學生序號及密碼不能為空")
            }
            else if(UID.length === 0){
                setMsg("交換學生序號不能為空")
            }
            else if(password.length === 0){
                setMsg("密碼不能為空")
            }
            setShow(true)
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault()
        if(e.currentTarget.checkValidity()){
            await queryUser({ variables: { UID: regisUID }})
            // if(data){
            //     if(! data.users[0]){
            //         setMsg("序號不存在")
            //         setShow(true)
            //     }
            //     else if(data.users[0].password !== null){
            //         console.log(true)
            //         setMsg("序號已註冊")
            //         setShow(true)
            //     }
            //     else{
            //         const msg = await updateUser({ variables: { UID: regisUID, data: { password: regisPassword }}})
            //         console.log(msg.data.updateUser)
            //         if(msg.data.updateUser === "success"){
            //             console.log(true)
            //             setMsg("註冊成功")
            //             setShow(true)
            //             setPage("login")
            //         }
            //     }

            // }
        }
        else{
            if(regisUID.length === 0 && regisPassword.length === 0){
                setMsg("交換學生序號及密碼不能為空")
            }
            else if(regisUID.length === 0){
                setMsg("交換學生序號不能為空")
            }
            else if(regisPassword.length === 0){
                setMsg("密碼不能為空")
            }
            setShow(true)
        }
    };

    const showAlert = (
        <Modal
            size="sm"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>{msg}</Modal.Header>
        </Modal>
    )

    const login = (
        <>
            <Form noValidate validated={validated} onSubmit={e => handleLogin(e)} style={{width: "60%"}}>
                <Form.Group controlId="UID" className="mb-4">
                    <Form.Control
                        autoFocus
                        required
                        type="text"
                        value={UID}
                        onChange={(e) => setUID(e.target.value)}
                        className="form-control"
                        placeholder="交換學生序號"
                        style={{borderRadius: "30px"}}
                    />
                </Form.Group>
                <Form.Group controlId="password" className="mb-4">
                    <Form.Control
                        required 
                        type="password"
                        value={password}
                        placeholder="密碼"
                        style={{borderRadius: "30px"}}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button style={{ borderRadius: "30px", width: "100%"}} variant="secondary" type="submit"> 登入 </Button>
                <div className="d-flex justify-content-center mt-3">
                還沒有帳號嗎? <Card.Link style={{ color: "#B5838D" }} className="ms-2" onClick={(e) => setPage("register")}>註冊</Card.Link>
            </div>
            </Form>
        </>
    )
    const register = (
        <>
            <Form noValidate validated={validated} onSubmit={e => handleRegister(e)} style={{width: "60%"}}>
                <Form.Group size="lg" controlId="regisUID" className="mb-4">
                    <Form.Control
                        autoFocus
                        required
                        type="text"
                        value={regisUID}
                        placeholder="交換學生序號"
                        style={{borderRadius: "30px"}}
                        onChange={(e) => setRegisUID(e.target.value)}
                        className="form-control"
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="studentID" className="mb-4">
                    <Form.Control
                        required
                        type="text"
                        value={studentID}
                        placeholder="學號"
                        style={{borderRadius: "30px"}}
                        onChange={(e) => setStudentID(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password" className="mb-4">
                    <Form.Control
                        required
                        type="password"
                        value={regisPassword}
                        placeholder="密碼"
                        style={{borderRadius: "30px"}}
                        onChange={(e) => setRegisPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="secondary" style={{borderRadius: "30px", width: "100%"}} type="submit"> 註冊 </Button>
                <div className="d-flex justify-content-center mt-3">
                    返回 <Card.Link style={{ color: "#B5838D" }} className="ms-2" onClick={(e) => setPage("login")}>登入</Card.Link>
                </div>
            </Form>
        </>
    )

    useEffect(() => {
        if(data)
            handleAfterQuery()
    }, [data])

    return (
        <>
            {
                loggedIn? <Redirect push to="/mainPage/"/>:
                (<Container className="center d-flex justify-content-center">
                    {showAlert}
                    <Card style={{width: "50%", borderRadius: "30px"}}>
                        <Card.Title style={{fontSize: "18px"}} className="d-flex justify-content-center">
                            <h2 className="m-4" style={{fontWeight: "bold"}}>交換學生搓湯圓平台</h2>
                        </Card.Title>
                        <div className="d-flex justify-content-center mb-4">
                            { page === "login" ? login : register }
                        </div>
                    </Card>
                </Container>)
            }
        </>
    )
};

export default LoginPage;