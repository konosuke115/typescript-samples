export {};

type Pitcher = {
  throwingSpeed: number;
};

type Batter = {
  battingAvarage: number;
};

// type TwoWayPlayer = {
//   throwingSpeed: number,
//   battingAvarage: number;
// }
type TwoWayPlayer = Pitcher & Batter;

const Ohtani: TwoWayPlayer = {
  throwingSpeed: 160,
  battingAvarage: 0.3
};
