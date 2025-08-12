import React from 'react';

type Props = {
  name: string;
};

const SkillTag: React.FC<Props> = ({ name }) => {
  return (
    <div className="bg-neutral-700/60 hover:bg-neutral-600/60 text-neutral-200 border border-neutral-600/40 py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200 backdrop-blur-sm">
      {name}
    </div>
  );
};

export default SkillTag;