import React from 'react';
import { whyChoose } from '../constans';

const WhyChoose = () => {
  return (
    <div className="max-container">
      <div className="w-[50%]">
        <p className="text-2xl text-light-green font-bold uppercase">почему мы</p>
        <h2 className="text-4xl font-bold">Почему наши клиенты выбирают нас</h2>
      </div>
      <div className="mt-12 flex flex-wrap gap-y-8 justify-between">
        {whyChoose.map((item) => (
          <div key={item.id} className="w-[32%] flex flex-col justify-between  p-6 shadow-xl rounded-xl bg-primary">
            <span className="mb-5 text-4xl font-bold text-light-green">{item.id}.</span>
            <div>
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-sm mt-2 mb-7">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
