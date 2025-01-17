import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useWallet } from 'use-wallet';
import Button from '../../Button';
import { isTransactionRecent, useAllTransactions } from '../../../state/transactions/hooks';
import useModal from '../../../hooks/useModal';
import TxModal from './TxModal';
import buttonA from '../../../assets/img/buttonA.png';

interface TxButtonProps {}

const TxButton: React.FC<TxButtonProps> = () => {
  const { account } = useWallet();
  const allTransactions = useAllTransactions();

  const pendingTransactions = useMemo(
    () => Object.values(allTransactions).filter((tx) => !tx.receipt).length,
    [allTransactions],
  );

  const [onPresentTransactionModal, onDismissTransactionModal] = useModal(
    <TxModal onDismiss={() => onDismissTransactionModal()} />,
  );
  return (
    <>
      {!!account && (
        <StyledTxButton>
          <Button
            size="sm"
            text={
              pendingTransactions > 0 ? `${pendingTransactions} Pending` : `Transactions`
            }
            variant={'tertiary'}
            onClick={() => onPresentTransactionModal()}
          />
        </StyledTxButton>
      )}
    </>
  );
};

const StyledTxButton = styled.div`
  margin-right: ${(props) => props.theme.spacing[4]}px;
  background-image: url(${buttonA});
  background-repeat : no-repeat;
  background-size: 100% 100%;
`;

export default TxButton;
