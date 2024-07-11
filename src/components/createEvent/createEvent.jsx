import React, { useRef, useState } from 'react';

function CreateEvent() {
  const [bannerPreview, setBannerPreview] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    start_date: '',
    end_date: '',
    type: '',
    ticket_sale_date: '',
    description: ''
  });

  const fileInputRef = useRef(null)
  const bannerRef = useRef(null)
  const popupRef = useRef(null)

  const checkFileSize = (event, setBannerPreview) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setBannerPreview(reader.result);
            document.getElementById('bannerPreview').style.display = 'block';
        };
        reader.readAsDataURL(file);
        bannerRef.current.style.display = 'none';
    }
  };
  
  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to handle form submission
    console.log(formData);
  };
  <input className='w-full bg-grey rounded h-11 px-3' type="file"  name="banner" accept="image/*" style={{display:"none"}} onChange={(e) => checkFileSize(e, setBannerPreview)} required />

  return (
    <div className='bg-black h-full'>
      <div ref={popupRef} className="fixed inset-0 flex items-center justify-center z-50 hidden">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="bg-white p-6 rounded-lg z-10">
          <h2 className="text-xl font-bold mb-4">Modal Title</h2>
          <p className="mb-4">This is the content of the modal. You can add any content here.</p>
          <div className="flex justify-end">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2">
                Close
            </button>
          </div>
        </div>
      </div>
      <div className='px-24'>
        <h1 className='p-4 text-white text-center text-2xl'>Create New Event</h1>
        <form className='flex flex-col gap-4' method="post" action="/add-event" encType="multipart/form-data" onSubmit={handleSubmit}>
          <div
              className='bg-white flex flex-col justify-center items-center'
              style={{ height: '300px' }}
              onClick={handleFileClick}
          >
              <div ref={bannerRef} className='flex flex-col justify-center items-center'>
                <img
                    className='h-10 w-10'
                    id="uploadIcon"
                    src="https://img.icons8.com/ios/50/000000/upload.png"
                    alt="Upload Icon"
                />
                <p id="uploadText" className='text-xl'>Input banner (1280×720)</p>
              </div>
              <input
                  ref={fileInputRef}
                  className='w-full bg-grey rounded h-11 px-3'
                  type="file"
                  name="banner"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => checkFileSize(e, setBannerPreview)}
                  required
              />
              <img id="bannerPreview" src={bannerPreview} style={{ display: "none", height: "300px", width:"100%" }} alt="Banner Preview" />
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <div >
              <label htmlFor="name" className='text-white'>Name Event:</label><span style={{ color: 'red' }}>*</span>
              <br/>
              <input className='w-full bg-grey rounded h-11 px-3' type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="location" className='text-white'>Location:</label><span style={{ color: 'red' }}>*</span>
              <br/>
              <input className='w-full bg-grey rounded h-11 px-3' type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="start_date" className='text-white'>Start Date:</label><span style={{ color: 'red' }}>*</span>
              <br/>
              <input className='w-full bg-grey rounded h-11 px-3' type="datetime-local" id="start_date" name="start_date" value={formData.start_date} onChange={handleInputChange} required />
            </div>
            <div >
              <label htmlFor="end_date" className='text-white'>End Date:</label><span style={{ color: 'red' }}>*</span>
              <br/>
              <input className='w-full bg-grey rounded h-11 px-3' type="datetime-local" id="end_date" name="end_date" value={formData.end_date} onChange={handleInputChange} required />
            </div>
          </div>
          <div>
            <label htmlFor="type" className='text-white'>Type:</label><span style={{ color: 'red' }}>*</span>
            <br/>
            <select className='w-full bg-grey rounded h-11 px-3' style={{appearance: "none"}} id="type" name="type" value={formData.type} onChange={handleInputChange} required>
              <option value="" disabled className='w-full bg-grey rounded h-11 px-3'>Select a type</option>
              <option value="music" className='w-full bg-grey rounded h-11 px-3'>Music</option>
              <option value="sport" className='w-full bg-grey rounded h-11 px-3'>Sport</option>
              <option value="workshop" className='w-full bg-grey rounded h-11 px-3'>Workshop</option>
              <option value="comedy" className='w-full bg-grey rounded h-11 px-3'>Comedy</option>
              <option value="art" className='w-full bg-grey rounded h-11 px-3'>Art</option>
              <option value="other" className='w-full bg-grey rounded h-11 px-3'>Other</option>
            </select>
          </div>
          <div >
            <label htmlFor="ticket_sale_date" className='text-white'>Ticket Sale Date:</label><span style={{ color: 'red' }}>*</span>
            <br/>
            <input className='w-full bg-grey rounded h-11 px-3' type="datetime-local" id="ticket_sale_date" name="ticket_sale_date" value={formData.ticket_sale_date} onChange={handleInputChange} required />
          </div>
          <div >
            <label htmlFor="editor" className='text-white'>Description:</label>
            <br/>
            <textarea className='w-full bg-grey rounded h-36 px-3 py-2' id="editor" name='description' value={formData.description} onChange={handleInputChange} />
          </div>
          <div>
            <button type="submit" className='text-white bg-purple p-2 rounded-lg w-full'>Create Event</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
