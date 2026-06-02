import { signIn, useSession } from "next-auth/react"
import React from "react"
import { Button } from "../ui"
import { CircleUser, User, User2, UserRound } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { on } from "node:cluster"

interface Props {
  className?: string
  onSignIn: () => void
}

export const ProfileButton: React.FC<Props> = ({ className, onSignIn }) => {
  const { data: session } = useSession()

  return (
    <div>
      {!session ? (
        <Button variant="outline" className={className} onClick={onSignIn}>
          <User size={16} />
          Войти
        </Button>
      ) : (
        <Link href={"/profile"}>
          <Button
            variant="outline"
            className={"flex items-center rounded-2xl bg-primary p-0"}
          >
            {session.user?.image ? (
              <img
                src={String(session.user?.image)}
                alt="profile"
                className="h-[38px] w-[38px] rounded-2xl"
              />
            ) : (
              <UserRound size={38} className="p-1 font-light text-white" />
            )}
          </Button>
        </Link>
      )}
    </div>
  )
}
