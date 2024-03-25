import React from "react";

interface LeaderboardProps {
  isDisabled: boolean;
}

const Leaderboard: React.FC<LeaderboardProps> = ({isDisabled}) => {
  const leaderboardData = [
    { name: "Player 1", score: 100 },
    { name: "Player 2", score: 90 },
    { name: "Player 3", score: 80 },
  ];

  return isDisabled ? (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {leaderboardData.map((item, index) => (
          <li key={index}>
            {item.name}: {item.score}
          </li>
        ))}
      </ol>
    </div>
  ) : <div></div>;
};

export default Leaderboard;
