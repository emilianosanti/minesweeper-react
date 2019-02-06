import React, { Component } from 'react';

// Icons
import { FaTrophy } from 'react-icons/fa';
import { FaRegMeh } from 'react-icons/fa';

// App Services
import { formatDate, getTimesSpent } from '../../../services/utils';

// Component styles
import './style.scss';

class GameList extends Component {
  constructor(props) {
    super(props);

    this.headerItems = ['Status', 'Date', 'Time spent', 'Difficulty', 'Rows/Columns', 'Pending Bombs'];

    this.renderList = this.renderList.bind(this);
    this.renderHeaderItems = this.renderHeaderItems.bind(this);
  }

  renderHeaderItems(item, index) {
    return <div key={index} className='mwGameList_headerItem'>{item}</div>;
  }

  renderHeader() {
    return (
      <div className='mwGameList_headerRow'>
        {this.headerItems.map(this.renderHeaderItems)}
      </div>
    );
  }

  renderList(game, index) {
    const remainingBombs = game.bombsQuantity - game.flagsQuantity;
    const remainingBombsChecked = remainingBombs < 0 ? 0 : remainingBombs;

    return (
      <div key={index} className='mwGameList_gameRow'>
        <div className='mwGameList_gameRowItem'>
          {game.gameWin ? 'Victory' : 'Defeated'}
          <span className='mwGameList_rowIcon'>{game.gameWin ? <FaTrophy /> : <FaRegMeh />}</span>
        </div>
        <div className='mwGameList_gameRowItem'>
          {formatDate(new Date(game.finishTimestamp))}
        </div>
        <div className='mwGameList_gameRowItem'>
          {getTimesSpent(game.finishTimestamp - game.startTimestamp)}
        </div>
        <div className='mwGameList_gameRowItem'>
          {game.bombs}
        </div>
        <div className='mwGameList_gameRowItem'>
          {`${game.rows}/${game.columns}`}
        </div>
        <div className='mwGameList_gameRowItem'>
          {remainingBombsChecked}
        </div>
      </div>
    );
  }

  render() {
    const { data } = this.props;

    if (!data.length) {
      return <div>Your game list is empty!</div>;
    }

    return (
      <div className='mwGameList'>
        {this.renderHeader()}
        {data.map(this.renderList)}
      </div>
    );
  }
}

export default GameList;
