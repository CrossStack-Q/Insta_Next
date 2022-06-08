import React, { Fragment, useRef, useState } from "react";

import { Snapshot, useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import {
  Modal,
  Button,
  Text,
  Input,
  Grid,
  Row,
  Checkbox,
  Textarea,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { CameraIcon } from "@heroicons/react/outline";
import { db,storage } from "../firebase"
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { ref,getDownloadURL , uploadString } from "firebase/storage";

function ModalQ() {
    const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const [visible, setVisible] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const [selectedFile, setSelectrdFile] = useState(null);
  const [loading,setLoading] = useState(false);
  

  const uploadPost = async () => {
    if (loading) return;

    setLoading(true);

    // Create a post and add data to it.
    // get post ID  of your newlu created value
    //  upload image to firestore with post id
    // get download url and update original post with url.

    const docRef = await addDoc(collection(db,'posts'),{
        username: session.user.name,
        caption: captionRef.current.value,
        profileImg: session.user.image,
        timestamp: serverTimestamp()
    })

    console.log("New doc added with ID ",docRef.id)

    const imageRef = ref(storage,`posts/${docRef.id}/image`);


    await uploadString(imageRef,selectedFile,"data_url").then(async snapshot => {
        const downloadURL =  await getDownloadURL(imageRef);
        await updateDoc(doc(db, 'posts',docRef.id), {
            image: downloadURL
        })
    })

    setOpen(false);
    setLoading(false);
    setSelectrdFile(null)


  }

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectrdFile(readerEvent.target.result);
    };
  };

  const closeHandler = () => {
    setOpen(false), setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      {open && (
        <Modal
          closeButton
          preventClose
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
          scroll
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Create a{" "}
              <Text b size={18}>
                Post
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            {selectedFile ? (
              <img
                src={selectedFile}
                onClick={() => setSelectrdFile(null)}
                alt=""
              />
            ) : (
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full cursor-pointer">
                <Button
                  auto
                  color="warning"
                  onClick={() => filePickerRef.current.click()}
                  icon={
                    <CameraIcon
                      className="h-6 w-6 text-red-400"
                      aria-hidden="true"
                    />
                  }
                >
                  Add Image
                </Button>
              </div>
            )}

            <div>
              <input
                ref={filePickerRef}
                onChange={addImageToPost}
                type="file"
                hidden
              />
            </div>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              ref={captionRef}
              placeholder="Post Tag"
            />
          </Modal.Body>
          <Button
            size="md"
            disabled={!selectedFile}
            css={{
              margin: "$20",
              marginTop: "$4",
              marginBottom: "$8",
            }}
            auto
            onClick={uploadPost}
          >
            {loading ? "Uploading" : "Upload Post"}
          </Button>
        </Modal>
      )}
    </div>
  );
}

export default ModalQ;
