import { useEffect, useState, useRef } from 'react'
import styles from './CustomersList.module.css'
import CustomerCard from '../../molecules/CustomerCard/CustomerCard'
import { Customer } from '../../../models/Customer'
import Axios from '../../../base/providers/Axios'
import { ApiQueryAble } from '../../../base/Api'
import { retrieveCustomers } from './CustomersList.service'
import Button from '../../atoms/Button/Button'
import Loading from '../../Loading/Loading'

const LIMIT_PER_PAGE = '5'

export type { Customer, ApiQueryAble }

export {
  styles,
  CustomerCard,
  Axios,
  Button,
  Loading,
  LIMIT_PER_PAGE,
  retrieveCustomers,
  useEffect,
  useState,
  useRef,
}
