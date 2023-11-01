import React from 'react'
import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

export default () => (
  <Popup trigger={<button className="button"> Rules </button>} modal nested>
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          <RiCloseLine />
        </button>

        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </div>
      </div>
    )}
  </Popup>
)
