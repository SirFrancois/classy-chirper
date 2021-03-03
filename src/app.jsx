import React from 'react';

class App extends React.Component {
constructor(props){
    super(props);
    this.state = {
        
        chirps: [
            {
                name: "Sir",
                message: "Words"
            },
            {
                name: "Chris",
                message: "Evvvvvvven more words"
            },
            {
                name: "maliek",
                message: " Too many words at this point its getting wild"
            }
        ]
    }

}


    componentDidMount(){{
        setTimeout(() => {
            this.setState({
                name:[...this.state.chirps. ]
            })
        }, 2000);
    }}



     handleSubmit(e) {
        e.preventDefault();
         this.setState({
            name: '',
            message: [thid.state.chirps.message]

            })
        }


    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-7">
                        <form className="form-group">
                            <label> New Chirp Entry</label>
                            <input value={this.state.chirps.name} onChange={e => this.setState({ })}></input>
                            <input value={this.state.chirps.message} onChange={e => this.setState({})}></input>
                        </form>
                    </div>
                </section>
            </main>


        );
    }
}

export default App;
 