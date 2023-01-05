import React from "react";
import { Collapse } from "react-collapse";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
import {FaRegQuestionCircle} from 'react-icons/fa'

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-[10px]">
      <div className="bg-gray-200 py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
        onClick={toggle}> <p className="py-4 text-[30px] pr-3  text-gray-700 "><FaRegQuestionCircle /> </p>
            <p className="text-[22px] font-semibold flex-1">{title}</p>
           
            <div className="text-[30px]">
                {open ? <AiOutlineMinus /> : <AiOutlinePlus /> }
            </div>

        </div>

        <Collapse isOpened={open}>
            <div className="bg-white px-[50px] py-[20px]">{desc}</div>
        </Collapse>
    </div>
  );
};

export default AccordionItem;
