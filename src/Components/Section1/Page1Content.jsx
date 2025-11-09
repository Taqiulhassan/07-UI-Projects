import React from 'react';
import LeftContent from './LeftContent';
import RigthContent from './RigthContent';

const Page1Content = (props) => {
  return (
    <div className="pb-16 pt-6 items-center flex gap-10 h-[90vh] px-18">
      <LeftContent />
      <RigthContent users={props.users} />
    </div>
  );
};

export default Page1Content;
