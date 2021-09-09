import React, { createRef, useRef } from 'react';
import styles from './nav.module.css'

const Nav = ({onSearch}) => {
    //input값을 받는 변수를 만들자!
    const inputRef = useRef();
// onClick, onKeyPress를 따로 하는 것말고 검색을 처리할 수 있는 콜백함수를 만드는 것이 더 효율적이다.
    const handleSearch = ()=>{
        const value = inputRef.current.value;
        //자 여기까지 했다. 그럼 이 값을 밖에다가 던져야한다. 어떻게? 프롭으로!
        //이제 onSearch를 받아 올 것이다. 그래서 search가 되면 너의 컴포넌트안에 버튼이 눌러졌는지 엔터키가 쳐서 검색됐는지
        //상관 없고 검색이라는 이벤트가 발생하면 내가 전달해주는 이 콜백함수를 불러라고 >prop으로 전달받는다! 
        //그래서 우리는 이 onSearch에 검색된 결과값을 호출해 줄 것이다. 
        onSearch(value);
        //일단 value가 호출이 되는지 안되는지 보자
        console.log(value)

    }

    const onClick = ()=>{
        handleSearch()
    }
    const onKeyPress = (event)=>{
        if(event.key === 'Enter'){
            handleSearch();
        }
    }
    return(
        <header className={styles.header}>
            <div className={styles.img_title}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Youtube</h1>    
            </div>
            <input ref={inputRef}className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress}/>
            <button className={styles.button} onClick={onClick} type="submit">
                <img className={styles.btnImg} src="/images/search.png" alt="search" />
            </button>
        </header>
        
    )}
    ;

export default Nav;