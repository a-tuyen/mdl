const Form = () => {
    return (
        <div className="Form">
            <h1> Send us a Message!</h1>
            <form onSubmit={()=> {}}>
                <label>Name</label>
                <input type='text' required />
                <label>Email</label>
                <input type='text' required />
                <label>Subject</label>
                <input type='text' required />
                <label>Message</label>
                <input type='text' required /> 
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form;