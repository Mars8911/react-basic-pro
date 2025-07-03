import { useState } from 'react'
import './App.scss'
import avatar from './images/bozai.png'

/**
 * 評論列表的渲染和操作
 *
 * 1. 根據狀態渲染評論列表
 * 2. 刪除評論
 */

// 評論列表數據
const defaultList = [
    {
        // 評論 id
        rpid: 3,
        // 使用者資訊
        user: {
            uid: '13258165',
            avatar: '',
            uname: '周阿倫',
        },
        // 評論內容
        content: '唉唷，不錯喔',
        // 評論時間
        ctime: '12-31 23:59',
        like: 88,
    },
    {
        rpid: 2,
        user: {
            uid: '36080105',
            avatar: '',
            uname: '蔡依林',
        },
        content: '百變女王 七十二變',
        ctime: '11-11 11:30',
        like: 90,
    },
    {
        rpid: 1,
        user: {
            uid: '30009257',
            avatar,
            uname: '劉德華',
        },
        content: '不老傳說 演唱會',
        ctime: '10-19 09:00',
        like: 66,
    },
]
// 當前登入使用者資訊
const user = {
    // 使用者 id
    uid: '30009257',
    // 使用者頭像
    avatar,
    // 使用者暱稱
    uname: 'React 前端示範',
}

/**
 * 導航 Tab 的渲染和操作
 *
 * 1. 渲染導航 Tab 與高亮
 * 2. 評論列表排序
 *   最熱 => 按讚數降序
 *   最新 => 建立時間降序
 */

// 導航 Tab 陣列
const tabs = [
    { type: 'hot', text: '最熱' },
    { type: 'time', text: '最新' },
]

const App = () => {

    // 定義 list狀態
    const [commentList, setComment] = useState(defaultList);



    return (
        <div className="app">
            {/* 導航 Tab */}
            <div className="reply-navigation">
                <ul className="nav-bar">
                    <li className="nav-title">
                        <span className="nav-title-text">評論</span>
                        {/* 評論數量 */}
                        <span className="total-reply">{10}</span>
                    </li>
                    <li className="nav-sort">
                        {/* 類別名稱： active */}
                        <span className='nav-item'>最新</span>
                        <span className='nav-item'>最熱</span>
                    </li>
                </ul>
            </div>

            <div className="reply-wrap">
                {/* 發表評論 */}
                <div className="box-normal">
                    {/* 當前使用者頭像 */}
                    <div className="reply-box-avatar">
                        <div className="bili-avatar">
                            <img className="bili-avatar-img" src={avatar} alt="使用者頭像" />
                        </div>
                    </div>
                    <div className="reply-box-wrap">
                        {/* 評論框 */}
                        <textarea
                            className="reply-box-textarea"
                            placeholder="發表友善的評論"
                        />
                        {/* 發佈按鈕 */}
                        <div className="reply-box-send">
                            <div className="send-text">發佈</div>
                        </div>
                    </div>
                </div>
                {/* 評論列表 */}
                {
                    commentList.map((item) => {
                        return <div className="reply-list" key={item.rpid}>
                            {/* 評論項目 */}
                            <div className="reply-item">
                                {/* 頭像 */}
                                <div className="root-reply-avatar">
                                    <div className="bili-avatar">
                                        <img
                                            className="bili-avatar-img"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="content-wrap">
                                    {/* 使用者名稱 */}
                                    <div className="user-info">
                                        <div className="user-name">{item.user.uname}</div>
                                    </div>
                                    {/* 評論內容 */}
                                    <div className="root-reply">
                                        <span className="reply-content">{item.content}</span>
                                        <div className="reply-info">
                                            {/* 評論時間 */}
                                            <span className="reply-time">{'2023-11-11'}</span>
                                            {/* 按讚數 */}
                                            <span className="reply-time">按讚數: {item.like}</span>
                                            <span className="delete-btn">
                                                刪除
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default App
