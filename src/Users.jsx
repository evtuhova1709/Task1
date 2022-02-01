import React from 'react';
import { connect } from 'react-redux';
import { setResultAC } from './redux/result-reducer';
import classes from './Users.module.css';
import { useState } from 'react'

/* import classes from './HomePage.module.css' */

const Users = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (

        <div className={classes.users}>
            <div className={classes.home}>
                <div className={classes.input_name}>Hi , please enter a username!</div>
                <div className={classes.areas}>
                    <input className={classes.area} type={'text'} placeholder={'Name...'} onChange={event => { setSearchTerm(event.target.value) }} />


                </div>


            </div>
            <div className={classes.pagination}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && classes.selectedPage}>{p}</span>
                })}

            </div>

            {
                props.result.filter((r) => {
                    if (searchTerm === '') {
                        return r
                    } else if (r.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return r

                    }



                }).map(r => <div key={r.id}>
                    <div>
                        <ul className={classes.usersName}>
                            <li>

                                {r.name}


                            </li>
                        </ul>

                    </div>
                    <span>
                        <div>
                            <img className={classes.usersPhoto} src={r.avatarUrl}></img>
                        </div>
                    </span>

                </div>)
            }
        </div>
    )


}


let mapStateToProps = (state) => {
    return {
        result: state.resultPage.result,
        pageSize: state.resultPage.pageSize,
        totalUsersCount: state.resultPage.totalUsersCount,
        currentPage: state.resultPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setResult: (result) => {
            dispatch(setResultAC(result))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);