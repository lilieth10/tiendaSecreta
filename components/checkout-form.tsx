"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCartStore } from "@/lib/store/cart"
import { toast } from "sonner"

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un email válido.",
  }),
  direccion: z.string().min(5, {
    message: "La dirección debe tener al menos 5 caracteres.",
  }),
  metodoPago: z.enum(["tarjeta", "transferencia", "efectivo"], {
    required_error: "Por favor selecciona un método de pago.",
  }),
})

export function CheckoutForm() {
  const { items, total, clearCart } = useCartStore()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      direccion: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulación de procesamiento de pago
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: "Procesando pago...",
        success: () => {
          clearCart()
          return "¡Pago exitoso! Tu pedido ha sido procesado."
        },
        error: "Hubo un error al procesar el pago",
      }
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto p-4 space-y-6"
    >
      <h2 className="text-2xl font-bold text-center">Checkout</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre completo</FormLabel>
                <FormControl>
                  <Input placeholder="Juan Pérez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="juan@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="direccion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dirección de envío</FormLabel>
                <FormControl>
                  <Input placeholder="Calle Principal 123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="metodoPago"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Método de pago</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="tarjeta" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Tarjeta de crédito/débito
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="transferencia" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Transferencia bancaria
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="efectivo" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Efectivo al recibir
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <div className="flex justify-between items-center font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={items.length === 0}
            >
              Confirmar Pago
            </Button>
          </div>
        </form>
      </Form>
    </motion.div>
  )
} 