import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  Divider,
  TextField,
  MenuItem
} from '@mui/material';
import { useReducer, useState } from 'react';

function MorningOverView() {
  const theme = useTheme();

  const initialTracking = {
    overallTrend: '',
    movingAverage: '',
    cprNature: '',
    StockOpenedRespectToCPR: '',
    StockClosedRespectToCPRYesterday: '',
    StockOpenedRespectYesterdayRange: '',
    OpeningNatureOfStock: '',
    widthOfCPR:''
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'OVERALLTREND':
        return { ...state, overallTrend: action.value };
      case 'MOVING_AVERAGE':
        return { ...state, movingAverage: action.value };
      case 'CPR_NATURE':
        return { ...state, cprNature: action.value };
      case 'OPENED_CPR':
        return { ...state, StockOpenedRespectToCPR: action.value };
      case 'CLOSED_RESPECT_CPR':
        return { ...state, StockClosedRespectToCPRYesterday: action.value };
      case 'OPENED_RANGE':
        return { ...state, StockOpenedRespectYesterdayRange: action.value };
      case 'NATURE_STOCK':
        return { ...state, OpeningNatureOfStock: action.value };
      case 'WIDTH_OF_CPR':
        return { ...state, widthOfCPR: action.value };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialTracking);
  const [finalPrompt, setfinalPrompt] = useState('');

  const handleCreatePrompt = () => {
    const initialData =
      `I am a trader using the strategy of CPR and Pivot points with moving Average.
      I use the Central pivot Range(CPR) for the trade and trend analysis. So today I going to take a Stock
      which is having the following studies I made.
      The stock is having:
      -${state.overallTrend}
      -${state.movingAverage}
      -${state.cprNature}
      -${state.StockOpenedRespectToCPR}
      -${state.StockClosedRespectToCPRYesterday}
      -${state.StockOpenedRespectYesterdayRange}
      -${state.OpeningNatureOfStock}
      -${state.widthOfCPR}

      What will be the directional bias of the stock to look for? 
      Key points to consider?
      Target to Look for?
      Do I need to take only the trade to the  Directional Bias you suggest?
      Trending Day or Range Day?
      Any suggentions to consider.
      Along with this come up with the reasons for the suggestion and directional bias you 
      prefferably points out.


      
      `;
      setfinalPrompt(initialData)
  };

  const overallTrend = [
    {
      id: 'Bullish Trend',
      value: 'Overall the stock is in Bullish Trend'
    },
    {
      id: 'Bearish Trend',
      value: 'Overall the stock is in Bearish Trend'
    },
    {
      id: 'SideWays Trend',
      value: 'Overall the stock is in SideWays Trend'
    }
  ];
  const MovingAverageContent = [
    {
      id: 'Above',
      value: 'The Stock is Above 200 Moving Average line'
    },
    {
      id: 'Below',
      value: 'The Stock is Below 200 Moving Average line'
    },
    {
      id: 'On',
      value: 'The Stock is on the 200 Moving Average line'
    },
    {
      id: 'Just Above',
      value: 'The Stock is just Above 200 Moving Average line'
    },
    {
      id: 'Just Below',
      value: 'The Stock is Just Below 200 Moving Average line'
    }
  ];
  const CprOverallNature = [
    {
      id: 'Hign Value Relationship ',
      value:
        'The CPR is following High value Relationship with previous day CPR'
    },
    {
      id: 'Unchanged Value Relationship',
      value:
        'The CPR is following Unchanged value Relationship with previous day CPR'
    },
    {
      id: 'Low Value Relationship',
      value: 'The CPR is following Low Value Relationship with previous day CPR'
    },
    {
      id: 'Inside Value Relationship ⬆️',
      value:
        'The CPR is following Inside Value Relationship with previous day CPR'
    },
    {
      id: 'Outside Value Relationship',
      value:
        'The CPR is following Outside Value Relationship with previous day CPR'
    },
    {
      id: 'Overlapping High Value Relationship',
      value:
        'The CPR is following Overlapping High Value Relationship with previous day CPR'
    },
    {
      id: 'Overlapping low Value Relationship',
      value: 'The CPR is following Overlapping low Value Relationship'
    }
  ];

  const widthOfCPR = [
    {
      id: 'CPR is Narrow',
      value:
        'The width of the CPR is Narrow'
    },
    {
      id: 'CPR is Wide',
      value:
        'The width of the CPR is Wide'
    },
    {
      id: 'Too Narrow',
      value: 'The width of the CPR is too Narrow compared to last few days'
    },
    {
      id: 'Too Wide',
      value:
        'The width of the CPR is too Wide compared to last few days'
    },
  ];

  const openingAboveCPR = [
    {
      id: 'Above CPR',
      value: 'The Stock Opened Above the CPR'
    },
    {
      id: 'On CPR',
      value: 'The Stock Opened On the CPR'
    },
    {
      id: 'Below CPR',
      value: 'The Stock Opened Below the CPR'
    }
  ];

  const PreviousDayClose = [
    {
      id: 'Close Above CPR YesterDay',
      value: 'The Stock Closed Above the CPR YesterDay'
    },
    {
      id: 'Close On CPR YesterDay',
      value: 'The Stock Closed On the CPR YesterDay'
    },
    {
      id: 'Close Below CPR YesterDay',
      value: 'The Stock Closed Below the CPR YesterDay'
    }
  ];
  const OpeningPreviousDayRange = [
    {
      id: 'Above Previous Day Range',
      value: 'The stock opened Above the Previous Day Range'
    },
    {
      id: 'On the Previous Day Range',
      value: 'The stock opened on the Previous Day Range'
    },
    {
      id: 'Below Previous Day Range',
      value: 'The stock opened Below the Previous Day Range'
    }
  ];

  const handleStockValue = (type, value) => {
    dispatch({
      type,
      value
    });
  };

  console.log(state);

  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography
              sx={{
                pb: 3
              }}
              variant="h4"
            >
              Morning Overview
            </Typography>
            <TextField
              label="Overall Trend"
              variant="outlined"
              select
              defaultValue={overallTrend[0].value}
              fullWidth={true}
              onChange={(e) => handleStockValue('OVERALLTREND', e.target.value)}
            >
              {overallTrend.map((each) => (
                <MenuItem key={each.id} value={each.value}>
                  {each.id}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Above 200 Moving Average"
              variant="outlined"
              select
              fullWidth={true}
              defaultValue={MovingAverageContent[0].value}
              margin="normal"
              onChange={(e) =>
                handleStockValue('MOVING_AVERAGE', e.target.value)
              }
            >
              {MovingAverageContent.map((each) => (
                <MenuItem key={each.id} value={each.value}>
                  {each.id}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="CPR Nature"
              variant="outlined"
              select
              fullWidth={true}
              margin="normal"
              defaultValue={CprOverallNature[0].value}
              onChange={(e) => handleStockValue('CPR_NATURE', e.target.value)}
            >
              {CprOverallNature.map((each) => (
                <MenuItem key={each.id} value={each.value}>
                  {each.id}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Stock Opened respect to CPR"
              variant="outlined"
              select
              fullWidth={true}
              margin="normal"
              defaultValue={openingAboveCPR[0].value}
              onChange={(e) => handleStockValue('OPENED_CPR', e.target.value)}
            >
              {openingAboveCPR.map((each) => (
                <MenuItem key={each.id} value={each.value}>
                  {each.id}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Stock Closed respect to CPR Previous Day"
              variant="outlined"
              select
              fullWidth={true}
              margin="normal"
              defaultValue={PreviousDayClose[0].value}
              onChange={(e) =>
                handleStockValue('CLOSED_RESPECT_CPR', e.target.value)
              }
            >
              {PreviousDayClose.map((each) => (
                <MenuItem key={each.id} value={each.value}>
                  {each.id}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Stock Open respect to Range"
              variant="outlined"
              select
              fullWidth={true}
              margin="normal"
              defaultValue={OpeningPreviousDayRange[0].value}
              onChange={(e) => handleStockValue('OPENED_RANGE', e.target.value)}
            >
              {OpeningPreviousDayRange.map((each) => (
                <MenuItem key={each.id} value={each.value}>
                  {each.id}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Width of CPR"
              variant="outlined"
              select
              fullWidth={true}
              margin="normal"
              defaultValue={OpeningPreviousDayRange[0].value}
              onChange={(e) => handleStockValue('WIDTH_OF_CPR', e.target.value)}
            >
              {widthOfCPR.map((each) => (
                <MenuItem key={each.id} value={each.value}>
                  {each.id}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Opening Nature of The Stock"
              variant="outlined"
              fullWidth={true}
              margin="normal"
              multiline={true}
              rows={4}
              onChange={(e) => handleStockValue('NATURE_STOCK', e.target.value)}
            />
            <Grid container spacing={3}>
              <Grid sm item>
                <Button fullWidth variant="contained" onClick={handleCreatePrompt}>
                  Create Prompt
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          sx={{
            position: 'relative'
          }}
          display="flex"
          alignItems="start"
          item
          xs={12}
          md={6}
        >
          <Box
            component="span"
            sx={{
              display: { xs: 'none', md: 'inline-block' }
            }}
          >
            <Divider absolute orientation="vertical" />
          </Box>
          <Box py={4} pr={4} px={4} flex={1} width={'100%'}>
            <Typography
              sx={{
                pb: 3
              }}
              variant="h4"
            >
              Created Prompt
            </Typography>
            <TextField
              label="Opening Nature of The Stock"
              variant="outlined"
              fullWidth={true}
              margin="normal"
              multiline={true}
              value={finalPrompt}
              rows={20}
              sx={{ width: '100%' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default MorningOverView;
