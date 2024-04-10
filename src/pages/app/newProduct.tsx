import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'
import { toast } from 'sonner'
import { z } from 'zod'

import { createNewProductMutation } from '@/api/products'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const newProductSchema = z.object({
  name: z.string().min(2),
  price: z.string(),
  oldPrice: z.string().nullable(),
  imgUrl: z.string().url(),
  discountValue: z.number().nullable(),
  stars: z.string().nullable(),
  color: z.string().nullable(),
  isNew: z.boolean(),
  isSale: z.boolean(),
  category: z.string().nullable(),
})

type NewProductType = z.infer<typeof newProductSchema>

const NewProduct = () => {
  const queryClient = useQueryClient()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewProductType>({
    defaultValues: {
      name: '',
      imgUrl: '',
      price: '$',
      oldPrice: null,
      isNew: false,
      isSale: false,
      discountValue: null,
      stars: null,
      color: null,
      category: null,
    },
    resolver: zodResolver(newProductSchema),
  })

  const { mutateAsync: addNewProduct } = useMutation({
    mutationFn: createNewProductMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      toast.success('New Product Created Successfully 🎉')
    },
    onError: () => {
      toast.error('Error Creating New Product 🚨')
    },
  })

  const handleCreateNewProduct = async (data: NewProductType) => {
    const newProductData = {
      ...data,
      price: Number(data.price.replace(/[^\d.-]/g, '')),
      oldPrice: data.oldPrice
        ? Number(data.oldPrice.replace(/[^\d.-]/g, ''))
        : null,
      stars: data.stars ? Number(data.stars) : null,
    }

    await addNewProduct(newProductData)

    reset()
  }

  return (
    <div className="my-4 flex flex-col items-center justify-center">
      <span className="mb-4 text-xl font-semibold sm:text-3xl">
        New Product
      </span>
      <form onSubmit={handleSubmit(handleCreateNewProduct)}>
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-6 md:px-4 lg:grid-cols-4">
          <div className="m-4 flex flex-col gap-1">
            <Label>Name*</Label>
            <Input placeholder="Name" {...register('name')} />
            {!!errors && (
              <span className="text-xs text-red-600">
                {errors.name?.message as string}
              </span>
            )}
          </div>
          <div className="m-4 flex flex-col gap-1">
            <Label>Price*</Label>
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <NumericFormat
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  thousandSeparator=","
                  decimalSeparator="."
                  prefix="$ "
                  decimalScale={2}
                  placeholder="Price"
                  {...field}
                />
              )}
            />
            {!!errors && (
              <span className="text-xs text-red-600">
                {errors.price?.message as string}
              </span>
            )}
          </div>
          <div className="m-4 flex flex-col gap-1">
            <Label>Old Price</Label>
            <Controller
              name="oldPrice"
              control={control}
              render={({ field }) => (
                <NumericFormat
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  thousandSeparator=","
                  decimalSeparator="."
                  prefix="$ "
                  decimalScale={2}
                  placeholder="Old Price"
                  {...field}
                />
              )}
            />
            {!!errors && (
              <span className="text-xs text-red-600">
                {errors.oldPrice?.message as string}
              </span>
            )}
          </div>
          <div className="m-4 flex flex-col gap-1">
            <Label>Stars</Label>
            <Controller
              name="stars"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  {...field}
                >
                  <SelectTrigger className="w-32 border-2 sm:w-48">
                    <SelectValue className="px-2" placeholder="Stars" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="m-4 flex flex-col gap-1">
            <Label>Image URL*</Label>
            <Input placeholder="Image URL" {...register('imgUrl')} />
            {!!errors && (
              <span className="text-xs text-red-600">
                {errors.imgUrl?.message as string}
              </span>
            )}
          </div>
          <div className="m-4 flex flex-col gap-1">
            <Label>Discount Value</Label>
            <Input
              placeholder="Discount Value"
              type="number"
              {...register('discountValue', { valueAsNumber: true })}
            />
            {!!errors && (
              <span className="text-xs text-red-600">
                {errors.discountValue?.message as string}
              </span>
            )}
          </div>
          <div className="m-4 flex flex-col gap-1">
            <Label>Color</Label>
            <Input placeholder="Color" {...register('color')} />
            {!!errors && (
              <span className="text-xs text-red-600">
                {errors.color?.message as string}
              </span>
            )}
          </div>
          <div className="m-4 flex flex-col gap-1">
            <Label>Category</Label>
            <Input placeholder="Category" {...register('category')} />
            {!!errors && (
              <span className="text-xs text-red-600">
                {errors.category?.message as string}
              </span>
            )}
          </div>
          <div className="m-4 flex gap-2">
            <Label htmlFor="isNew">Is New</Label>
            <Controller
              name="isNew"
              control={control}
              render={({ field }) => (
                <Checkbox
                  onCheckedChange={field.onChange}
                  checked={field.value}
                  id="isNew"
                />
              )}
            />
          </div>
          <div className="m-4 flex gap-2">
            <Label htmlFor="isSale">Is Sale</Label>
            <Controller
              name="isSale"
              control={control}
              render={({ field }) => (
                <Checkbox
                  onCheckedChange={field.onChange}
                  checked={field.value}
                  id="isSale"
                />
              )}
            />
          </div>
        </div>
        <div className="m-6 flex items-end justify-end">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="disabled:cursor-not-allowed disabled:bg-zinc-400"
          >
            Create New Product
          </Button>
        </div>
      </form>
    </div>
  )
}

export default NewProduct
