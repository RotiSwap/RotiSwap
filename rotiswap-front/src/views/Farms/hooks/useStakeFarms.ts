import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useStakeFarms = (pid: number, decimals: number) => {
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stakeFarm(masterChefContract, pid, amount, decimals)
      console.info(txHash)
    },
    [masterChefContract, pid, decimals],
  )

  return { onStake: handleStake }
}

export default useStakeFarms
