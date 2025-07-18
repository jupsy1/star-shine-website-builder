import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:shadow-button transform hover:scale-105 transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg transform hover:scale-105",
        outline:
          "border border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md transform hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground transform hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-gradient-accent text-accent-foreground hover:shadow-button transform hover:scale-105",
        professional: "bg-deep-blue text-white hover:bg-trust-blue hover:shadow-elegant transform hover:scale-105",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
