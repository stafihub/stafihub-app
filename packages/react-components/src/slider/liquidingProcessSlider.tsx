import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import close_svg from 'src/assets/images/close.svg';
import Liquiding_heard from 'src/assets/images/liquiding_heard.svg';
import { STAFI_CHAIN_ID } from 'src/features/bridgeClice';
import { setProcessSlider } from 'src/features/globalClice';
import { reSending as atomReSending, reStaking as atomReStaking } from 'src/features/rATOMClice';
import { reSending as bnbReSending, reStaking as bnbReStaking } from 'src/features/rBNBClice';
import { reSending, reStaking } from 'src/features/rDOTClice';
import { reSending as ksmReSending, reStaking as ksmReStaking } from 'src/features/rKSMClice';
import { reSending as maticReSending, reStaking as maticReStaking } from 'src/features/rMATICClice';
import { reSending as solReSending, reStaking as solReStaking } from 'src/features/rSOLClice';
import { rSymbol } from 'src/keyring/defaults';
import SolServer from 'src/servers/sol/index';
import util from 'src/util/toolUtil';
import './liquidingProcessSlider.scss';
import Item from './liquidingProcessSliderItem';

type Props = {
  route: any;
  history: any;
};

const solServer = new SolServer();

export default function Index(props: Props) {
  const dispatch = useDispatch();
  const location = useLocation();

  const { show, process } = useSelector((state: any) => {
    return {
      show: state.globalModule.processSlider,
      process: state.globalModule.process,
    };
  });

  useEffect(() => {
    dispatch(setProcessSlider(false));
  }, [location]);

  const reSendingClick = () => {
    if (util.pageType() == rSymbol.Dot) {
      dispatch(
        reSending((href: any) => {
          href && props.history.push(href);
        }),
      );
    }
    if (util.pageType() == rSymbol.Ksm) {
      dispatch(
        ksmReSending((href: any) => {
          href && props.history.push(href);
        }),
      );
    }
    if (util.pageType() == rSymbol.Atom) {
      dispatch(
        atomReSending((href: any) => {
          href && props.history.push(href);
        }),
      );
    }
    if (util.pageType() == rSymbol.Sol) {
      dispatch(
        solReSending((href: any) => {
          href && props.history.push(href);
        }),
      );
    }
    if (util.pageType() == rSymbol.Matic) {
      dispatch(
        maticReSending((href: any) => {
          href && props.history.push(href);
        }),
      );
    }
    if (util.pageType() == rSymbol.Bnb) {
      dispatch(
        bnbReSending((href: any) => {
          href && props.history.push(href);
        }),
      );
    }
  };

  const reStakingClick = () => {
    if (util.pageType() == rSymbol.Dot) {
      dispatch(
        reStaking((href: any) => {
          href && props.history.push(href);
        }),
      );
    }
    if (util.pageType() == rSymbol.Ksm) {
      dispatch(
        ksmReStaking((href: any) => {
          href && props.history.push(href);
        }),
      );
    }
    if (util.pageType() == rSymbol.Atom) {
      dispatch(
        atomReStaking((href: any) => {
          href && props.history.push(href);
        }),
      );
    }
    if (util.pageType() == rSymbol.Sol) {
      reStakeSol();
    }
    if (util.pageType() == rSymbol.Matic) {
      dispatch(
        maticReStaking((href: any) => {
          href && props.history.push(href);
        }),
      );
    }
    if (util.pageType() == rSymbol.Bnb) {
      dispatch(
        bnbReStaking((href: any) => {
          href && props.history.push(href);
        }),
      );
    }
  };

  const reStakeSol = () => {
    dispatch(
      solReStaking((href: any) => {
        href && props.history.push(href);
      }),
    );
  };

  if (!show) {
    return null;
  }
  return (
    <div className='stafi_liquiding_proces_slider'>
      <div className='header'>
        <img
          className='close'
          src={close_svg}
          onClick={() => {
            dispatch(setProcessSlider(false));
          }}
        />
        <img className='logo' src={Liquiding_heard} /> Liquiding Process
      </div>

      <div className='body'>
        <Item
          rSymbol={process.rSymbol}
          index={1}
          title='Sending'
          tooltipText='Stake is sending to the contract and is recorded to wait for staking'
          data={process.sending}
          onClick={reSendingClick}
          showButton={true}
        />

        <Item
          rSymbol={process.rSymbol}
          index={2}
          title='Staking'
          tooltipText='Contract is interacting with original chain and stake on your behalf'
          data={process.staking}
          onClick={reStakingClick}
          showButton={true}
        />

        <Item
          rSymbol={process.rSymbol}
          index={3}
          title='Minting'
          tooltipText='Staked proof gets validated, contract is issuing rToken to your address'
          data={process.minting}
          showButton={false}
        />

        {process.destChainId !== STAFI_CHAIN_ID && (
          <Item
            rSymbol={process.rSymbol}
            index={4}
            title='Swapping'
            tooltipText='rToken is swapped to designate version'
            data={process.swapping}
            showButton={false}
          />
        )}
      </div>
    </div>
  );
}
