import { useRef, useState, useEffect } from "react";
import { faCheck,faTimes,faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom' 
import '../css/Register.css'
import register from '../assets/register.png'
import { IoPersonSharp } from "react-icons/io5"
import { FaLock } from "react-icons/fa6";

const USER_REGEX = /^[A-z][A-z0-9-_]{7,15}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*).{8,16}$/;

import React from 'react'

    const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user,setUser] = useState('');
    const [validName , setValidName] = useState(false);
    const [userFocus , setUserFocus] = useState(false);

    const [pwd,setPwd] = useState('');
    const [validPwd , setValidPwd] = useState(false);
    const [pwdFocus , setPwdFocus] = useState(false);

    const [matchPwd,setMatchPwd] = useState('');
    const [validMatch , setValidMatch] = useState(false);
    const [matchFocus , setMatchFocus] = useState(false);

    const [errMsg,setErrMsg] = useState('');
    const [success , setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        setSuccess(true);
    }

    return (
    <div className="reg-page">
    {success ? (
        window.location.href = '/login'
    ) : (
<div className="reg">
    <img src={register} alt="" />
    <section className="register">
        <form onSubmit={handleSubmit}>
            <p className="heading">Register</p>
            <p ref={errRef} className={errMsg ? "errMsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <label htmlFor="username">
                <IoPersonSharp /> Username:
                <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validName || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input
            type="text" 
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            required
            value={user}
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            />
            <p id="uidnote" className={userFocus && user && !validName ? "instruction" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                7 to 16 characters. <br />
                Must begin with a letter. <br />
                Letters, Number, Underscores, Hyphens Allowed.
            </p>
            <label htmlFor="password">
                <FaLock />Password:
                <span className={validPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input
            type="password" 
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            required 
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            />
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instruction" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 16 characters. <br />
                Must include uppercase and lowercase letters and a number.
            </p>

            <label htmlFor="confirm_pwd">
                <FaLock />Confirm Password:
                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input
            type="password" 
            id="confirm_pwd"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setMatchPwd(e.target.value)}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instruction" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match th first password input field.               
            </p>
            <button disabled={!validName || !validPwd || !validMatch ? true : false}>Register</button>
            <div className="bottom">
                <p> Already registered? </p>
                <span className="line">
                    <Link to='/login'>Sign in</Link>
                </span>
            </div>
        </form>
        
    </section>
</div>
    )}
    </div>
    )
}


export default Register