import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="w-full">
      <hr class="my-6 border-gray-200 mx-auto dark:border-gray-700" />
      <div class="flex items-center justify-between flex-col">
        <span class="text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024{' '}
          <a href="https://github.com/DxMortem" class="hover:underline">
            DxMortem™
          </a>
          . All Rights Reserved.
        </span>
        <span className=" text-sm flex items-center text-gray-500">
          <p>Contact:</p>
          <a className="p-1" href="https://github.com/DxMortem">
            <FaGithub />
          </a>
          <a className="p-1" href="https://linkedin.com/in/daborrerom">
            <FaLinkedin />
          </a>
          <a className="p-1" href="mailto:daborrerom@gmail.com">
            <FaEnvelope />
          </a>
        </span>
      </div>
    </div>
  );
};

export { Footer };
