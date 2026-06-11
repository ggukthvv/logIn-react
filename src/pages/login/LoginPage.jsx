import { useState } from 'react'
import Input from '../../components/Login/Input';
import Button from '../../components/Login/Button';

const LoginPage = () => {


    const [clickValue, setClickValue] = useState('password')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleEyeClick = () => {
        if (clickValue === 'password') {
            setClickValue('text')
        } else {
            setClickValue('password')
        }
    }

    const hadleEmailChange = (e) => {
        const newEmailValue = e.target.value;
        setEmail(newEmailValue);
        console.log('currentEmailValue', newEmailValue)
    };

    const handlePasswordChange = (e) => {
        const newPassValue = e.target.value;
        setPassword(newPassValue);
        console.log('currentPassValue', newPassValue)
    }


    const handleButtonClick = () => {
        // var infoValid;
        // console.log('loged in', email, password)
        setErrorMessage('')
        if (email === 'test@gmail.com' && password === 'Aaaa1111') {
            console.log('log in succed', email, password);
            window.location.replace('/dashboard')
            setEmail('');
            setPassword('');
        } else {
            console.log('user not found');
            setErrorMessage('Wrong email and password')
        }
    };





    return (
        <div style={{
            backgroundImage: 'url("backg.png")',
            height: '100vh',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
        }} >
            <div style={{
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '64px 40px 64px 40px',
                border: '1px solid grey',
                borderRadius: 24,
                width: 460,
                height: 519,
                gap: 30
            }}>
                <div style={{
                    display: 'grid',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} >
                    <svg width="140" height="16" viewBox="0 0 140 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_7264_10812)">
                            <g clip-path="url(#clip1_7264_10812)">
                                <path d="M87.1091 8.72618V14.0232H92.0656C93.4603 14.0232 94.6126 12.8301 94.6126 11.3713C94.6126 9.91238 93.4668 8.71936 92.0656 8.71936H87.1091V8.72618ZM93.971 7.72405C95.215 8.43304 96.0596 9.8033 96.0596 11.3781C96.0596 13.6618 94.2656 15.5366 92.0656 15.5366H85.6621V0.40918H91.3781C93.5716 0.40918 95.3721 2.2771 95.3721 4.56768C95.3721 5.78796 94.8549 6.93325 93.971 7.72405ZM87.1091 7.21958H91.3781C92.7728 7.21958 93.9251 6.02656 93.9251 4.56768C93.9251 3.1088 92.7793 1.91578 91.3781 1.91578H87.1091V7.21276V7.21958Z" fill="white" />
                                <path d="M113.777 0.40918H115.224L123.965 12.9665V0.40918H125.412V15.5298H123.965L115.224 2.97927V15.5298H113.777V0.40918Z" fill="white" />
                                <path d="M107.884 11.5417L109.41 15.5298H110.968L105.18 0.40918H103.622L97.834 15.5298H99.3923L100.918 11.5417H107.884ZM104.401 2.44753L107.308 10.0351H101.494L104.401 2.44753Z" fill="white" />
                                <path d="M41.6092 0C45.8389 0 49.2633 3.57222 49.2633 7.96932C49.2633 12.3664 45.8324 15.9386 41.6092 15.9386C37.386 15.9386 33.9551 12.3664 33.9551 7.96932C33.9551 3.57222 37.386 0 41.6092 0ZM41.6092 3.29271C39.1277 3.29271 37.1176 5.3856 37.1176 7.96932C37.1176 10.553 39.1277 12.6459 41.6092 12.6459C44.0907 12.6459 46.1008 10.553 46.1008 7.96932C46.1008 5.3856 44.0907 3.29271 41.6092 3.29271Z" fill="white" />
                                <path d="M78.5325 1.51342V0.409033H81.5247V15.5364H78.5325V14.432C77.2229 15.4205 75.6646 15.9455 74.0408 15.9455C69.8111 15.9455 66.3867 12.3732 66.3867 7.97614C66.3867 3.57904 69.8111 0 74.0408 0C75.6646 0 77.2229 0.524925 78.5325 1.51342ZM74.0408 3.29271C71.5593 3.29271 69.5492 5.3856 69.5492 7.96932C69.5492 10.553 71.5593 12.6459 74.0408 12.6459C76.5223 12.6459 78.5325 10.553 78.5325 7.96932C78.5325 5.3856 76.5223 3.29271 74.0408 3.29271Z" fill="white" />
                                <path d="M55.2152 7.96932C55.2152 10.553 57.2253 12.6459 59.7068 12.6459C60.7937 12.6459 61.8348 12.2437 62.6532 11.5006L62.758 11.4052L64.3622 14.2957C63.0265 15.3592 61.4027 15.9386 59.7068 15.9386C55.4771 15.9386 52.0527 12.3664 52.0527 7.96932C52.0527 3.57222 55.4771 0 59.7068 0C61.4027 0 63.0265 0.579463 64.3622 1.64295L62.758 4.53345L62.6532 4.43801C61.8348 3.69493 60.7937 3.29271 59.7068 3.29271C57.2253 3.29271 55.2152 5.3856 55.2152 7.96932Z" fill="white" />
                                <path d="M16.4538 1.75897C16.2967 1.47265 16.2967 1.14542 16.4538 0.859097C16.6109 0.572774 16.8859 0.409161 17.2002 0.409161H21.2204L27.3097 11.3849C26.6418 12.5915 25.9674 13.7982 25.2996 15.0048C25.1424 15.2911 24.8674 15.4548 24.5531 15.4548C24.2388 15.4548 23.9638 15.2911 23.8067 15.0048C21.3579 10.5873 18.9091 6.16971 16.4603 1.75215M26.2293 0.409161L29.8108 6.87188L32.6525 1.75215C32.8096 1.46583 32.8096 1.1386 32.6525 0.85228C32.4953 0.565957 32.2203 0.402344 31.906 0.402344H26.2293V0.409161Z" fill="white" />
                                <path d="M14.529 13.839C12.9904 15.1751 10.9148 16 8.63624 16C4.28211 16 0 12.755 0 7.97616C0 3.57906 3.43092 0.00683594 7.6541 0.00683594C11.8773 0.00683594 15.3082 3.57224 15.3082 7.97616C15.3082 8.41246 15.2755 8.84194 15.21 9.26461H3.43092C4.07258 11.2212 6.16126 12.6528 8.63624 12.6528C10.3648 12.6528 11.8969 11.9574 12.8856 10.8803L14.5225 13.839H14.529ZM3.60116 5.9719H11.7136C10.9934 4.3903 9.44813 3.29955 7.6541 3.29955C5.86007 3.29955 4.31484 4.3903 3.59461 5.9719" fill="white" />
                                <path d="M129.078 0.40918H130.525V7.21958H132.43H133.478L138.212 0.40918H139.999L134.742 7.96947L139.999 15.5298H138.212L133.478 8.72618H132.43H130.525V15.5298H129.078V0.40918Z" fill="white" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_7264_10812">
                                <rect width="140" height="16" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_7264_10812">
                                <rect width="140" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg >

                </div>
                <p style={{ color: 'white', fontSize: 24, fontWeight: 400, fontFamily: 'sans-serif', textAlign: 'center' }}>Welcome to Wilco admin!</p>
                {/* <p>{infoValid}</p> */}
                <p style={{ color: '#c63838', fontSize: 14, fontWeight: 400, fontFamily: 'sans-serif' }}>{errorMessage}</p>
                <div>
                    <label style={{ color: '#FFFFFF99', fontSize: 12, fontWeight: 400, fontFamily: 'sans-serif' }}>Email</label>
                    <Input
                        type='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={hadleEmailChange}
                        required
                    />
                </div>

                <div style={{ position: 'relative', width: 200 }}>
                    <label style={{ color: '#FFFFFF99', fontSize: 12, fontWeight: 400, fontFamily: 'sans-serif' }}>Password</label>
                    <Input
                        type={clickValue}
                        placeholder='Enter your password'
                        required
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div onClick={handleEyeClick}>
                        <svg
                            style={{
                                position: 'absolute',
                                top: 38,
                                left: 350,
                            }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.0019 10.8881C6.40857 10.8881 5.11523 9.59475 5.11523 8.00141C5.11523 6.40808 6.40857 5.11475 8.0019 5.11475C9.59523 5.11475 10.8886 6.40808 10.8886 8.00141C10.8886 9.59475 9.59523 10.8881 8.0019 10.8881ZM8.0019 6.11475C6.9619 6.11475 6.11523 6.96141 6.11523 8.00141C6.11523 9.04141 6.9619 9.88808 8.0019 9.88808C9.0419 9.88808 9.88857 9.04141 9.88857 8.00141C9.88857 6.96141 9.0419 6.11475 8.0019 6.11475Z" fill="white" fill-opacity="0.6" />
                            <path d="M7.99875 14.0135C5.49208 14.0135 3.12542 12.5468 1.49875 10.0002C0.792083 8.90015 0.792083 7.10682 1.49875 6.00015C3.13208 3.45348 5.49875 1.98682 7.99875 1.98682C10.4987 1.98682 12.8654 3.45348 14.4921 6.00015C15.1988 7.10015 15.1988 8.89348 14.4921 10.0002C12.8654 12.5468 10.4987 14.0135 7.99875 14.0135ZM7.99875 2.98682C5.84542 2.98682 3.78542 4.28015 2.34542 6.54015C1.84542 7.32015 1.84542 8.68015 2.34542 9.46015C3.78542 11.7201 5.84542 13.0135 7.99875 13.0135C10.1521 13.0135 12.2121 11.7201 13.6521 9.46015C14.1521 8.68015 14.1521 7.32015 13.6521 6.54015C12.2121 4.28015 10.1521 2.98682 7.99875 2.98682Z" fill="white" fill-opacity="0.6" />
                        </svg>
                    </div>
                </div>


                <p style={{ color: 'white', fontSize: 12, fontWeight: 400, fontFamily: 'sans-serif', textAlign: 'end' }}>Forgot password?</p>
                <Button type='submit' text='Log in' color='#6400DC' onClick={handleButtonClick} />
            </div>
        </div >
    )
}

export default LoginPage