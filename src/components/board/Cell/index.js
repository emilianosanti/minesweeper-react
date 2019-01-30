import React, { Component } from 'react';

// Component styles
import './style.scss';

class Cell extends Component {
  constructor(props) {
    super(props);

    this.colors = {
      1: 'mwCell_boundaryBomb1',
      2: 'mwCell_boundaryBomb2',
      3: 'mwCell_boundaryBomb3',
      4: 'mwCell_boundaryBomb4',
      5: 'mwCell_boundaryBomb5',
      6: 'mwCell_boundaryBomb6',
      7: 'mwCell_boundaryBomb7',
      8: 'mwCell_boundaryBomb8',
    };

    // Method bindings
    this.onCellClick = this.onCellClick.bind(this);
    this.onContextMenuClick = this.onContextMenuClick.bind(this);
  }

  getCellProps(data) {
    const colorClass = data.open && data.bombsCount ? this.colors[data.bombsCount] : '';
    const closeClass = !data.open ? 'mwCell_close' : '';

    return {
      className: `mwCell ${colorClass} ${closeClass}`,
      onClick: this.onCellClick,
      onContextMenu: this.onContextMenuClick,
    };
  }

  onCellClick(event) {
    const { openCell, gameOver, data } = this.props;
    const { x, y } = data;

    if (data.open || data.flagged) {
      event.preventDefault();
    } else if (data.hasBomb && gameOver) {
      gameOver({ x, y });
    } else if (openCell) {
      openCell({ x, y });
    }
  }

  onContextMenuClick(event) {
    event.preventDefault();

    const { setFlag, data } = this.props;
    const { x, y } = data;

    if (!data.open) {
      setFlag({ x, y }, !data.flagged);
    }
  }

  renderBomb(data) {
    return data.hasBomb ? <span className='mwCell_bombs'>B</span> : null;
  }

  renderNumber(data) {
    return data.bombsCount ? data.bombsCount : null;
  }

  renderFlag(data) {
    return data.flagged ? <span className='mwCell_flags'>F</span> : null;
  }

  render() {
    const { data } = this.props;

    if (!data.open) {
      return <div {...this.getCellProps(data)}>{this.renderFlag(data)}</div>;
    }

    return (
      <div {...this.getCellProps(data)}>
        {this.renderBomb(data)}
        {this.renderNumber(data)}
        {this.renderFlag(data)}
      </div>
    );
  }
}

export default Cell;
