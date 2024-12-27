"use client";

import React, { useState, useEffect } from "react";

type Comment = {
  id: string;
  name: string;
  email: string;
  content: string;
  date: string;
};

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    content: "",
  });

  // Load comments from local storage when the component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", content: "" };

    // Validate Name (only letters, spaces, and a minimum of 2 characters)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    } else if (!/^[A-Za-z\s]{2,50}$/.test(formData.name)) {
      newErrors.name =
        "Name must be 2-50 characters and contain only letters and spaces.";
      isValid = false;
    }

    // Validate Email (strict email regex pattern)
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    // Validate Content (non-empty, max 300 characters)
    if (!formData.content.trim()) {
      newErrors.content = "Comment is required.";
      isValid = false;
    } else if (formData.content.length > 300) {
      newErrors.content = "Comment cannot exceed 300 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email, // Stored but not displayed
      content: formData.content,
      date: new Date().toISOString(),
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setFormData({ name: "", email: "", content: "" }); // Clear the form
    setErrors({ name: "", email: "", content: "" }); // Clear errors
  };

  return (
    <div className="mt-10 p-6 shadow-md border rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Comments</h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Your name"
            className="w-full border rounded-md p-2"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Your email"
            className="w-full border rounded-md p-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Comment Content Field */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Comment (max 100 characters)
          </label>
          <textarea
            value={formData.content}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, content: e.target.value }))
            }
            placeholder="Write your comment here..."
            className="w-full border rounded-md p-3"
            rows={4}
            maxLength={100}
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">{errors.content}</p>
          )}
          <p className="text-gray-500 text-sm mt-1">
            {formData.content.length}/100 characters used.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Post Comment
        </button>
      </form>

      {/* Display Comments */}
      {comments.length > 0 ? (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li key={comment.id} className="border-b pb-2">
              <p className="text-sm text-gray-500">
                {new Date(comment.date).toLocaleString()}
              </p>
              <p className="font-bold">{comment.name}</p>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
};

export default CommentSection;
