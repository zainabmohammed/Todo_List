import './foo.css'



const Foo =() => {

    return (
        <div className='foo-container'>
            <div className='input-box'>
                <input/>
                <button>Add</button>
            </div>
            <br/>
            <div className='foo-card'>
                <span>Hello World</span>
                <button>X</button>
            </div>
        </div>
    )
}

export default Foo