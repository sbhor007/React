import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import {Controller} from 'react-hook-form'

export default function RTE({name,control,label, defaulValue=""}) {
  return (
    <div className="w-full"> 
    {label && <label className="inline-block mb-1 pl-1">{label}</label>}

    <Controller 
    name={name || "content"}
    control={control}
    render={({field:{onChange}}) =>(
        <Editor 
        initialValue={defaulValue}
        init={{
            height: 300,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />
     </div>
  );
}
