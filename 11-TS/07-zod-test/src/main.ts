import {z} from 'zod'

const UserSchema = z.object({
  name: z.string()
})

// Infer typescript type from Zod schema
type User = z.infer<typeof UserSchema> 

const user1: User = {name: 'John'}
console.log('User1: ', user1)
console.log('------------------------------------------')

// We can also have Zod validate a JS object against the schema
const user2 = UserSchema.parse({name: 'Janet'})
console.log('User2: ', user2)
console.log('------------------------------------------')

try {
  const user3 = UserSchema.parse({name: 1})
  console.log('User3: ', user3)
} catch (e){
  console.log('Error occurred: ', e)
}
console.log('------------------------------------------')

// Can also do safeparse and avoid getting the exception
const ret4 = UserSchema.safeParse({name: 'Jennifer'})
if (ret4.success) console.log('User4: ', ret4.data)
else console.log('Error validating user4: ', ret4.error)
console.log('------------------------------------------')

const ret5 = UserSchema.safeParse({name: 45})
if (ret5.success) console.log('User4: ', ret5.data)
else console.log('Error validating user5: ', ret5.error)
