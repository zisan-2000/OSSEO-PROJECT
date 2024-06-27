import React from "react";

const GrantAccessForm = () => {
  return (
    <div className="bg-white p-4 md:p-8 shadow-md w-full max-w-[964px] mx-auto mt-16 md:mt-24 rounded-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Access & Permissions
      </h2>
      <p className="mb-4 md:mb-6 text-gray-700">
        <em>
          “Woah Woah! Slow your role brochacho! We just met and you’re already
          asking for access to my website?”
        </em>
      </p>
      <p className="mb-4 md:mb-6 text-gray-700">
        Yes, our team will need access to your website to do things like
        optimize content, resolve errors, improve PageSpeed, and a hundred other
        things. If you’d prefer to wait and provide us access later, that’s ok
        too. You can provide your account manager a login from the dashboard.
      </p>
      <p className="mb-4 md:mb-6 text-gray-700">
        To get this done now (recommended) use the secure area below to provide
        access.
      </p>
      <p className="mb-4 md:mb-6 text-gray-700">
        For best results, we recommend giving us access to the following:
      </p>
      <ul className="mb-4 md:mb-6 list-disc list-inside text-gray-700">
        <li>Website CMS (ie: Wordpress)</li>
        <li>Google Business Profile</li>
        <li>Google Analytics (optional)</li>
        <li>Search Console (optional)</li>
      </ul>
      <p className="mb-4 md:mb-6 text-gray-700">
        <strong>Delegating Access</strong>
        <br />
        If you are delegating access, please assign admin or manager permissions
        to{" "}
        <a href="mailto:agent@ocseo.com" className="text-blue-600">
          agent@ocseo.com
        </a>
      </p>
      <form>
        <div className="mb-4 md:mb-6">
          <label className="block text-gray-700 mb-2">Provide Login</label>
          <select className="w-full p-2 border border-gray-300 rounded mb-4">
            <option>Select Type</option>
            <option>Website CMS</option>
            <option>Google Business Profile</option>
            <option>Google Analytics</option>
            <option>Search Console</option>
          </select>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            placeholder="Note or other info"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            type="button"
            className="w-full bg-gray-100 text-gray-700 py-2 rounded border border-gray-300"
          >
            + Add Login
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-8">
          <button type="button" className="text-gray-700 mb-4 md:mb-0">
            Skip & Finish Later
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-6 rounded"
          >
            Finish
          </button>
        </div>
      </form>
    </div>
  );
};

export default GrantAccessForm;
