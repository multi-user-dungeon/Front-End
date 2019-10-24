import * as lines from "./RoomComponents";

const chooseLinesToDisplay = directions => {
  if (directions.n && directions.s && directions.w && directions.e) {
    return lines.bUpDownLeftRight;
  } else if (directions.n && directions.s && directions.w) {
    return lines.bUpLeftDown;
  } else if (directions.n && directions.s && directions.e) {
    return lines.bUpDownRight;
  } else if (directions.n && directions.e && directions.w) {
    return lines.bUpLeftRight;
  } else if (directions.e && directions.s && directions.w) {
    return lines.bDownRightLeft;
  } else if (directions.n && directions.s) {
    return lines.bUpDown;
  } else if (directions.n && directions.e) {
    return lines.bDownRight;
  } else if (directions.n && directions.w) {
    return lines.bDownLeft;
  } else if (directions.w && directions.e) {
    return lines.bLeftRight;
  } else if (directions.w && directions.s) {
    return lines.bUpLeft;
  } else if (directions.s && directions.e) {
    return lines.bUpRight;
  } else if (directions.n) {
    return lines.bDown;
  } else if (directions.s) {
    return lines.bUp;
  } else if (directions.e) {
    return lines.bRight;
  } else if (directions.w) {
    return lines.bLeft;
  }
};

export default chooseLinesToDisplay;
