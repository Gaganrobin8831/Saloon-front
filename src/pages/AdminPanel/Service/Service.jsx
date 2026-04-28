import { useState } from "react";
import axios from "axios"
import "./Service.css";
function Service() {
    const [imageFile, setImageFile] = useState(null)
    const [imageUploaded, setImageUploaded] = useState(false)

    const [serviceData, setServiceData] = useState({
        serviceName: "",
        category: "",
        price: "",
        duration: "",
        description: "",
        imageUrl:""
    })

    const handleChange = (e) => {
        setServiceData({
            ...serviceData,
            [e.target.name]: e.target.value

        })
    }
    const handleImageChange = (e) => {
        setImageFile(e.target.files[0])
    }

    const uploadImage = async () => {
        if (!imageFile) {
            alert("Please select image first")
            return
        }
        try {
            const formData = new FormData()
            formData.append("file", imageFile)
            formData.append("upload_preset", "saloon_image")

            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/drfhimeis/image/upload",
                formData
            )
            const imageUrl = res.data.secure_url

            setServiceData({
                ...serviceData,
                imageUrl: imageUrl
            })

            setImageUploaded(true)

            alert("Image Uploaded Successfully")

        } catch (error) {
            console.log(error)
            alert("Image Upload Failed")

        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(" http://localhost:3000/service/add",
                serviceData
            )
            alert(res.data.Message || "Service Added")
            setServiceData({
                serviceName: "",
                category: "",
                price: "",
                duration: "",
                description: "",
                imageUrl:""
            })
        } catch (error) {
            console.log(error)
            alert("service add failed")
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <form
                onSubmit={handleSubmit}
                className="bg-white- p-8 rounded-xl shadow-lg w-[400px] flex flex-col gap-4"
            >
                <h2 className="text-xl font-bold text-center">
                    service add
                </h2>
                {/* image upload
                <input type="file"
                    onChange={handleImageChange}
                    className="border p-2 rounded"
                />
                <button type="button"
                    onClick={uploadImage}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Uploade Image
                </button> */}


                {/* input disable until image uploaded */}
                <input
                    type="text"
                    name="serviceName"
                    placeholder="Service Name"
                    onChange={handleChange}
                    className="border p-2 rounded"

                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                    className="border p-2 rounded"

                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                    className="border p-2 rounded"

                />

                <input
                    type="text"
                    name="duration"
                    placeholder="Duration"
                    onChange={handleChange}
                    className="border p-2 rounded"

                />

                <textarea
                    name="description"
                    placeholder="Description"

                    onChange={handleChange}
                    className="border p-2 rounded"

                />
                {/* image upload */}
                <input type="file"
                    onChange={handleImageChange}
                    className="border p-2 rounded"
                />
                <button type="button"
                    onClick={uploadImage}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Uploade Image
                </button>

                <button type="submit"
                    className="bg-green-500 text-white p-2 rounded"
                >
                    Add Service
                </button>


            </form>
        </div>
    )
}

export default Service