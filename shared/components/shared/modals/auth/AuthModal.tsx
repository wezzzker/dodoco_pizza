import { Button, Dialog } from "@/shared/components/ui"
import { DialogContent, DialogTitle } from "@/shared/components/ui/dialog"
import { signIn } from "next-auth/react"
import React from "react"
import { Title } from "../../Title"

interface Props {
  open: boolean
  onClose: () => void
}

export const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const handleClose = () => {
    onClose()
  }
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[450px] bg-white p-10">
        <DialogTitle className="text-center text-2xl">Авторизация</DialogTitle>
        FROM
        <hr />
        <div className="flex flex-col gap-2">
          <Button
            variant={"secondary"}
            onClick={() =>
              signIn("github", { callbackUrl: "/", redirect: true })
            }
            type="button"
            className="h-12 flex-1 gap-2 p-2"
          >
            <img
              className="h-6 w-6"
              src="https://github.githubassets.com/favicons/favicon.svg"
              alt="github icon"
            />
            GitHub
          </Button>

          <Button
            variant={"secondary"}
            onClick={() =>
              signIn("google", { callbackUrl: "/", redirect: true })
            }
            type="button"
            className="h-12 flex-1 gap-2 p-2"
          >
            <img
              className="h-6 w-6"
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
              alt="google icon"
            />
            Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
