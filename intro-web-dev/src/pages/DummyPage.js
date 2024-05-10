import React, { useState } from 'react';

function DummyPage({display,content}) {
  return (
    display && (<div>{content}</div>)
  )
}

export default DummyPage