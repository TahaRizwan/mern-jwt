import express from 'express'
import { Workout } from '../models/workouts.js'

export const router = express.Router()

// GET ALL WORKOUT
router.get('/', async (req, res) => {
  try {
    const workout = await Workout.find()
    res.json(workout).status(200)
  } catch (error) {
    console.log(`error ${error}`)
    res.json(error).status(404)
  }
})

// GET SINGLE WORKOUT
router.get('/:id', async (req, res) => {
  try {
    const workout = await Workout.findOne({ _id: req.params.id })
    res.json(workout).status(200)
  } catch (error) {
    console.log(`error ${error}`)
    res.json(error).status(404)
  }
})

// POST A NEW WORKOUT
router.post('/', async (req, res) => {
  const { title, load, reps } = req.body
  try {
    const workout = await Workout.create({ title, load, reps })
    res.json(workout).status(200)
  } catch (error) {
    console.log(`error ${error}`)
    res.json(error).status(404)
  }
})

// DELETE A WORKOUT
router.delete('/:id', async (req, res) => {
  try {
    const workout = await Workout.deleteOne({ _id: req.params.id })
    res.json({ msg: 'Deleted Successfully' }).status(200)
  } catch (error) {
    console.log(`error ${error}`)
    res.json(error).status(404)
  }
})

// PATCH A WORKOUT
router.patch('/:id', async (req, res) => {
  const { title, load, reps } = req.body
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id },
      { title, load, reps }
    )
    res.json({ msg: 'Updated Successfully' }).status(200)
  } catch (error) {
    console.log(`error ${error}`)
    res.json(error).status(404)
  }
})
