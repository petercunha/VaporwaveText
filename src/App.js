import React, {Component} from 'react'
import {VaporMap} from './vapormap.js'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: '',
      selected: false
    }
  }

  render() {
    return (
      <div className='section'>
        <div className='container'>
          <br />
          <div className='row center'>
            <h4 className='thin white-text'>Ｖａｐｏｒｗａｖｅ</h4>
            <h4 className='thin grey-text text-lighten-2'>Text Converter</h4>
          </div>

          <div className='section'>
            <div className='row white-text'>
              <div className='col s12 m6'>

                <textarea
                  value={this.state.text}
                  onChange={this.handleChange.bind(this)}
                  placeholder='Type your text here...'
                  rows='14' style={{
                    color: 'white',
                    backgroundColor: this.state.text.length > 0 ? 'rgba(96,125,139,.4)' : null,
                    height: 'auto',
                    resize: 'none',
                    border: 'none',
                    outline: 'none',
                    fontSize: 20
                  }}
                />
              </div>

              <div className='col s12 m6'>
                <textarea
                  value={this.convert(this.state.text)}
                  placeholder=''
                  rows='14' style={{
                    color: 'white',
                    backgroundColor: this.state.text.length > 0 ? 'rgba(96,125,139,.4)' : null,
                    height: 'auto',
                    resize: 'none',
                    border: 'none',
                    outline: 'none',
                    fontSize: 20
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  convert(text) {
    if (!text) {
      return ''
    }

    var charArray = text.split('')
    for (var i = 0; i < charArray.length; i++) {
      if (VaporMap[charArray[i].toLowerCase()]) {
        charArray[i] = VaporMap[charArray[i]]
      }
    }
    text = charArray.join('')
    return text
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }
}

export default App
